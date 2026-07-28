import {
  ExtFile,
  Method,
  ServerAction,
  uploadExtFile,
  uploadExtFileChunked,
  uploadExtFilesConcurrent,
  uploadExtFilesViaAction,
} from "@files-ui/core";

export type UploadStrategyOptions = {
  // Server Actions (takes precedence over url)
  action?: ServerAction;
  
  // XHR/Fetch options
  url?: string;
  urlFromExtFile?: (f: ExtFile) => string;
  method?: Method;
  headers?: Record<string, string>;
  uploadLabel?: string;
  asBlob?: boolean;
  chunked?: boolean;
  chunkSize?: number;
  maxConcurrentUploads?: number;
};

export type UploadProgressCallback = (
  completedCount: number,
  totalCount: number,
  latestResult: ExtFile
) => void;

export const uploadSingleExtFileWithStrategy = async (
  extFile: ExtFile,
  options: UploadStrategyOptions
): Promise<ExtFile> => {
  const {
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel,
    asBlob,
    chunked = false,
    chunkSize,
  } = options;

  if (chunked) {
    const finalUrl = urlFromExtFile ? urlFromExtFile(extFile) : url;
    if (!finalUrl) {
      return {
        ...extFile,
        uploadStatus: "error",
        uploadMessage: "No upload URL provided",
      };
    }

    return uploadExtFileChunked(
      extFile,
      finalUrl,
      method,
      headers,
      uploadLabel,
      { chunkSize }
    );
  }

  return uploadExtFile(
    extFile,
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel,
    asBlob
  );
};

export const uploadExtFilesWithStrategy = async (
  extFiles: ExtFile[],
  options: UploadStrategyOptions,
  onFileComplete?: UploadProgressCallback
): Promise<ExtFile[]> => {
  if (extFiles.length === 0) return [];

  const {
    action,
    maxConcurrentUploads = 1,
    chunked = false,
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel,
    asBlob,
  } = options;

  // Priority 1: Server Actions (Next.js App Router)
  if (action) {
    return uploadExtFilesViaAction(
      extFiles,
      action,
      uploadLabel,
      maxConcurrentUploads,
      onFileComplete
    );
  }

  if (!chunked && maxConcurrentUploads > 1) {
    return uploadExtFilesConcurrent(
      extFiles,
      url,
      urlFromExtFile,
      method,
      headers,
      uploadLabel,
      asBlob,
      { maxConcurrency: maxConcurrentUploads },
      onFileComplete
    );
  }

  const results: ExtFile[] = [];
  const queue = [...extFiles.map((file, index) => ({ file, index }))];
  const completedByIndex: ExtFile[] = new Array(extFiles.length);
  const workers = Math.min(maxConcurrentUploads, extFiles.length);
  let completedCount = 0;

  const worker = async (): Promise<void> => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) return;

      const result = await uploadSingleExtFileWithStrategy(item.file, options);
      completedByIndex[item.index] = result;
      completedCount += 1;
      onFileComplete?.(completedCount, extFiles.length, result);
    }
  };

  await Promise.all(Array.from({ length: workers }, () => worker()));

  for (const result of completedByIndex) {
    if (result) results.push(result);
  }

  return results;
};
