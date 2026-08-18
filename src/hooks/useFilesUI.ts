import * as React from "react";
import {
  ExtFile,
  ExtFileManager,
  FileValidatorProps,
  Localization,
  Method,
  ServerAction,
  validateExtFileList,
  ValidateFileResponse,
} from "@files-ui/core";

/**
 * Options for useFilesUI hook
 */
export interface UseFilesUIOptions {
  // Validation
  /**
   * Comma-separated list of allowed MIME types or file extensions
   * @example "image/*,.pdf,video/mp4"
   */
  accept?: string;
  
  /**
   * Maximum file size in bytes
   * @example 5242880 (5MB)
   */
  maxFileSize?: number;
  
  /**
   * Maximum number of files allowed
   */
  maxFiles?: number;
  
  /**
   * Custom validation function
   */
  validator?: (f: File) => ValidateFileResponse;
  
  // Upload
  /**
   * Upload endpoint URL
   */
  url?: string;
  
  /**
   * Function to derive URL per file
   */
  urlFromExtFile?: (f: ExtFile) => string;
  
  /**
   * HTTP method for upload
   * @default "POST"
   */
  method?: Method;
  
  /**
   * Request headers
   */
  headers?: Record<string, string>;
  
  /**
   * Form field name for the file
   * @default "file"
   */
  uploadLabel?: string;
  
  /**
   * Upload as raw blob instead of FormData
   * @default false
   */
  asBlob?: boolean;
  
  /**
   * Enable chunked upload
   * @default false
   */
  chunked?: boolean;
  
  /**
   * Chunk size in bytes for chunked uploads
   * @default 1048576 (1MB)
   */
  chunkSize?: number;
  
  /**
   * Maximum number of concurrent uploads
   * @default 1
   */
  maxConcurrentUploads?: number;
  
  // Behavior
  /**
   * How to handle new files: add to existing or replace all
   * @default "add"
   */
  behaviour?: "add" | "replace";
  
  /**
   * Automatically remove invalid files after validation
   * @default false
   */
  autoClean?: boolean;
  
  /**
   * Remove invalid files before upload
   * @default false
   */
  cleanOnUpload?: boolean;
  
  // Localization
  /**
   * Language code for localization
   * @default "EN-en"
   */
  localization?: Localization;
  
  // Server Actions (NEW in v2.0)
  /**
   * Server Action for Next.js App Router
   * If provided, takes precedence over `url`
   * @example
   * ```tsx
   * "use server"
   * async function uploadAction(formData: FormData) {
   *   const file = formData.get("file");
   *   // Process file...
   *   return { success: true };
   * }
   * 
   * const { uploadFiles } = useFilesUI({ action: uploadAction });
   * ```
   */
  action?: ServerAction;
  
  // Callbacks
  /**
   * Called when files are added or changed
   */
  onChange?: (files: ExtFile[]) => void;
  
  /**
   * Called when upload starts
   */
  onUploadStart?: (files: ExtFile[]) => void;
  
  /**
   * Called when upload finishes
   */
  onUploadFinish?: (files: ExtFile[]) => void;
  
  /**
   * Called when a file is deleted
   */
  onDelete?: (id: string | number) => void;
  
  /**
   * Called when all files are cleaned/cleared
   */
  onClean?: (files: ExtFile[]) => void;
  
  // Config
  /**
   * Optional dropzone ID for managing multiple instances
   * If not provided, one will be generated automatically
   */
  dropzoneId?: string | number;
  
  /**
   * Initial files (controlled mode)
   */
  value?: ExtFile[];
}

/**
 * Return type of useFilesUI hook
 */
export interface UseFilesUIReturn {
  // State
  /**
   * Current list of files
   */
  files: ExtFile[];
  
  /**
   * Number of valid files
   */
  numberOfValidFiles: number;
  
  /**
   * Whether upload is in progress
   */
  isUploading: boolean;
  
  /**
   * Whether files are being dragged over
   */
  isDragging: boolean;
  
  /**
   * Dropzone ID for managing multiple instances
   */
  dropzoneId: string | number;
  
  // Actions
  /**
   * Add files to the list
   */
  addFiles: (fileList: FileList | File[]) => void;
  
  /**
   * Remove a specific file by ID
   */
  removeFile: (id: string | number) => void;
  
  /**
   * Update a file's properties
   */
  updateFile: (id: string | number, updates: Partial<ExtFile>) => void;
  
  /**
   * Clear all files
   */
  clearFiles: () => void;
  
  /**
   * Clear only invalid files
   */
  cleanFiles: () => void;
  
  // Upload
  /**
   * Upload all valid files
   */
  uploadFiles: () => Promise<ExtFile[]>;
  
  /**
   * Abort ongoing upload
   */
  abortUpload: () => void;

  /**
   * Abort upload for a specific file
   */
  abortFileUpload: (id: string | number) => void;
  
  // Validation
  /**
   * Manually trigger validation
   */
  validateFiles: () => void;
  
  // UI Helpers (for drag-drop implementations)
  /**
   * Get drag-and-drop event handlers
   */
  getDragHandlers: () => {
    onDragEnter: React.DragEventHandler<HTMLDivElement>;
    onDragLeave: React.DragEventHandler<HTMLDivElement>;
    onDragOver: React.DragEventHandler<HTMLDivElement>;
    onDrop: React.DragEventHandler<HTMLDivElement>;
  };
  
  /**
   * Get input element props
   */
  getInputProps: () => {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    accept?: string;
    multiple: boolean;
  };
}

type UploadTargetId = string | number | undefined;
type CanApplyForFile = (id: UploadTargetId) => boolean;
type CanApplyForGeneration = () => boolean;

export type { ServerAction };

/**
 * Headless hook for file upload management
 * 
 * Provides all the business logic for file validation, state management,
 * and upload orchestration without any UI components.
 * 
 * @example
 * ```tsx
 * const { files, addFiles, uploadFiles, getDragHandlers } = useFilesUI({
 *   accept: "image/*",
 *   maxFileSize: 5 * 1024 * 1024,
 *   url: "https://api.example.com/upload"
 * });
 * 
 * return (
 *   <div {...getDragHandlers()}>
 *     {files.map(f => <div key={f.id}>{f.name}</div>)}
 *   </div>
 * );
 * ```
 */
export const useFilesUI = (options: UseFilesUIOptions = {}): UseFilesUIReturn => {
  const {
    accept,
    maxFileSize,
    maxFiles,
    validator,
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel = "file",
    asBlob = false,
    chunked = false,
    chunkSize,
    maxConcurrentUploads = 1,
    behaviour = "add",
    autoClean = false,
    cleanOnUpload = false,
    localization,
    action,
    onChange,
    onUploadStart,
    onUploadFinish,
    onDelete,
    onClean,
    dropzoneId: providedDropzoneId,
    value,
  } = options;

  // Generate or use provided dropzone ID
  const [dropzoneId] = React.useState<string | number>(() => {
    return providedDropzoneId || ExtFileManager.createFileListMap();
  });

  // Local file state
  const [localFiles, setLocalFiles] = React.useState<ExtFile[]>(value || []);
  
  // Upload state
  const [isUploading, setIsUploading] = React.useState<boolean>(false);
  
  // Drag state
  const [isDragging, setIsDragging] = React.useState<boolean>(false);

  // Runtime refs for deterministic upload cancellation and stale update protection
  const uploadGenerationRef = React.useRef<number>(0);
  const localFilesRef = React.useRef<ExtFile[]>(localFiles);
  const abortedFileIdsRef = React.useRef<Set<string | number>>(new Set());

  React.useEffect(() => {
    localFilesRef.current = localFiles;
  }, [localFiles]);

  // Determine if validation is needed
  const needsValidation = React.useMemo(() => {
    return Boolean(
      (accept && accept.length > 0) ||
      (maxFileSize && maxFileSize >= 0) ||
      (maxFiles && maxFiles >= 0) ||
      validator
    );
  }, [accept, maxFileSize, maxFiles, validator]);

  // Count valid files
  const numberOfValidFiles = React.useMemo(() => {
    if (needsValidation) {
      return localFiles.filter((f) => f.valid).length;
    }
    return localFiles.length;
  }, [localFiles, needsValidation]);

  // Sync with controlled value
  React.useEffect(() => {
    if (value !== undefined && !isUploading) {
      setLocalFiles(value);
    }
  }, [value, isUploading]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      ExtFileManager.removeFileListMap(dropzoneId);
    };
  }, [dropzoneId]);

  /**
   * Validate files
   */
  const validateFilesInternal = React.useCallback(
    (files: ExtFile[]): ExtFile[] => {
      if (!needsValidation) {
        return files;
      }

      const remainingSlots = maxFiles
        ? maxFiles - numberOfValidFiles
        : Infinity;

      const validatorProps: FileValidatorProps = {
        maxFileSize,
        accept,
      };

      return validateExtFileList(
        files,
        remainingSlots,
        validatorProps,
        validator,
        maxFiles,
        localization
      );
    },
    [accept, maxFileSize, maxFiles, validator, localization, needsValidation, numberOfValidFiles]
  );

  /**
   * Add files
   */
  const addFiles = React.useCallback(
    (fileList: FileList | File[]) => {
      const filesArray = Array.from(fileList);
      
      // Convert to ExtFile
      let newExtFiles: ExtFile[] = filesArray.map((file) => ({
        id: ExtFileManager.getNextId(),
        file,
        name: file.name,
        type: file.type,
        size: file.size,
      }));

      // Validate
      newExtFiles = validateFilesInternal(newExtFiles);

      // Auto-clean invalid files
      if (autoClean) {
        newExtFiles = newExtFiles.filter((f) => f.valid);
      }

      // Update state based on behaviour
      setLocalFiles((prev) => {
        const updated =
          behaviour === "replace" ? newExtFiles : [...prev, ...newExtFiles];
        
        // Call onChange callback
        onChange?.(updated);
        
        return updated;
      });
    },
    [behaviour, autoClean, validateFilesInternal, onChange]
  );

  /**
   * Remove file
   */
  const removeFile = React.useCallback(
    (id: string | number) => {
      setLocalFiles((prev) => {
        const updated = prev.filter((f) => f.id !== id);
        onChange?.(updated);
        onDelete?.(id);
        return updated;
      });
    },
    [onChange, onDelete]
  );

  /**
   * Update file
   */
  const updateFile = React.useCallback(
    (id: string | number, updates: Partial<ExtFile>) => {
      setLocalFiles((prev) => {
        const updated = prev.map((f) =>
          f.id === id ? { ...f, ...updates } : f
        );
        onChange?.(updated);
        return updated;
      });
    },
    [onChange]
  );

  /**
   * Clear all files
   */
  const clearFiles = React.useCallback(() => {
    setLocalFiles([]);
    onChange?.([]);
    onClean?.([]);
  }, [onChange, onClean]);

  /**
   * Clean invalid files
   */
  const cleanFiles = React.useCallback(() => {
    setLocalFiles((prev) => {
      const updated = prev.filter((f) => f.valid);
      onChange?.(updated);
      onClean?.(prev.filter((f) => !f.valid));
      return updated;
    });
  }, [onChange, onClean]);

  /**
   * Validate files manually
   */
  const validateFiles = React.useCallback(() => {
    setLocalFiles((prev) => {
      const validated = validateFilesInternal(prev);
      onChange?.(validated);
      return validated;
    });
  }, [validateFilesInternal, onChange]);

  const appendExtraDataToFormData = React.useCallback(
    (formData: FormData, extraData?: ExtFile["extraData"]) => {
      if (!extraData) {
        return;
      }

      Object.entries(extraData).forEach(([key, value]) => {
        if (value === null || value === undefined) {
          return;
        }

        if (value instanceof Blob) {
          formData.append(key, value);
          return;
        }

        if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
          return;
        }

        formData.append(key, `${value}`);
      });
    },
    []
  );

  const uploadSingleFileWithServerAction = React.useCallback(
    async (file: ExtFile): Promise<ExtFile> => {
      if (!action) {
        throw new Error("Server action is not configured");
      }

      try {
        if (!file.file) {
          throw new Error("File object is missing");
        }

        const formData = new FormData();
        formData.append("file", file.file);
        appendExtraDataToFormData(formData, file.extraData);

        const response = await action(formData);

        return {
          ...file,
          uploadStatus: response.success ? "success" : "error",
          uploadMessage:
            response.message ||
            (response.success ? "Upload successful" : "Upload failed"),
          serverResponse: response,
        };
      } catch (error) {
        return {
          ...file,
          uploadStatus: "error",
          uploadMessage: error instanceof Error ? error.message : "Upload failed",
        };
      }
    },
    [action, appendExtraDataToFormData]
  );

  const uploadWithServerAction = React.useCallback(
    async (
      uploadableFiles: ExtFile[],
      canApplyForGeneration: CanApplyForGeneration,
      canApplyForFile: CanApplyForFile
    ): Promise<ExtFile[]> => {
      if (!action) {
        return [];
      }

      const results: ExtFile[] = [];

      for (const file of uploadableFiles) {
        if (!canApplyForGeneration()) {
          break;
        }

        if (canApplyForFile(file.id)) {
          setLocalFiles((prev) =>
            prev.map((f) =>
              f.id === file.id ? { ...f, uploadStatus: "uploading" } : f
            )
          );
        }

        const uploadedFile = await uploadSingleFileWithServerAction(file);
        if (!canApplyForFile(file.id)) {
          continue;
        }

        results.push(uploadedFile);
        setLocalFiles((prev) =>
          prev.map((f) => (f.id === file.id ? uploadedFile : f))
        );
      }

      return results;
    },
    [action, uploadSingleFileWithServerAction]
  );

  const uploadWithStrategyRoute = React.useCallback(
    async (
      uploadableFiles: ExtFile[],
      canApplyForGeneration: CanApplyForGeneration,
      canApplyForFile: CanApplyForFile
    ): Promise<ExtFile[]> => {
      const { uploadSingleExtFileWithStrategy, uploadExtFilesWithStrategy } =
        await import("../utils/uploadStrategy");

      let preparedFiles: ExtFile[] = uploadableFiles.map((file) => ({
        ...file,
        xhr: file.xhr || new XMLHttpRequest(),
        uploadStatus: "preparing" as const,
      }));

      if (canApplyForGeneration()) {
        setLocalFiles((prev) =>
          prev.map((f) => {
            const prepared = preparedFiles.find((candidate) => candidate.id === f.id);
            return prepared || f;
          })
        );
      }

      if ((maxConcurrentUploads || 1) > 1) {
        preparedFiles = preparedFiles.map((file) => ({
          ...file,
          uploadStatus: "uploading" as const,
        }));

        if (canApplyForGeneration()) {
          setLocalFiles((prev) =>
            prev.map((f) => {
              const prepared = preparedFiles.find((candidate) => candidate.id === f.id);
              return prepared || f;
            })
          );
        }

        const results = await uploadExtFilesWithStrategy(
          preparedFiles,
          {
            url,
            urlFromExtFile,
            method,
            headers,
            uploadLabel,
            asBlob,
            chunked,
            chunkSize,
            maxConcurrentUploads,
          },
          (_completedCount, _totalCount, latestResult) => {
            if (!canApplyForFile(latestResult.id)) {
              return;
            }

            setLocalFiles((prev) =>
              prev.map((f) => (f.id === latestResult.id ? latestResult : f))
            );
          }
        );

        if (canApplyForGeneration()) {
          setLocalFiles((prev) =>
            prev.map((f) => {
              const uploaded = results.find((result) => result.id === f.id);
              if (!uploaded) {
                return f;
              }

              if (abortedFileIdsRef.current.has(uploaded.id as string | number)) {
                return f;
              }

              return uploaded;
            })
          );
        }

        return results;
      }

      const sequentialResults: ExtFile[] = [];

      for (const file of preparedFiles) {
        if (!canApplyForGeneration()) {
          break;
        }

        const uploadingFile: ExtFile = {
          ...file,
          uploadStatus: "uploading" as const,
        };

        if (canApplyForFile(file.id)) {
          setLocalFiles((prev) =>
            prev.map((f) => (f.id === file.id ? uploadingFile : f))
          );
        }

        const result = await uploadSingleExtFileWithStrategy(uploadingFile, {
          url,
          urlFromExtFile,
          method,
          headers,
          uploadLabel,
          asBlob,
          chunked,
          chunkSize,
        });

        if (!canApplyForFile(file.id)) {
          continue;
        }

        sequentialResults.push(result);
        setLocalFiles((prev) =>
          prev.map((f) => (f.id === file.id ? result : f))
        );
      }

      return sequentialResults;
    },
    [
      url,
      urlFromExtFile,
      method,
      headers,
      uploadLabel,
      asBlob,
      chunked,
      chunkSize,
      maxConcurrentUploads,
    ]
  );

  /**
   * Upload files - supports Server Actions and XHR/fetch
   */
  const uploadFiles = React.useCallback(async (): Promise<ExtFile[]> => {
    if (isUploading || localFiles.length === 0) {
      return localFiles;
    }

    setIsUploading(true);
    const currentGeneration = uploadGenerationRef.current + 1;
    uploadGenerationRef.current = currentGeneration;

    // Filter uploadable files (valid or no validation configured, and not already uploaded)
    const uploadableFiles = localFiles.filter(
      (f) => (f.valid !== false) && !f.uploadStatus
    );

    if (uploadableFiles.length === 0) {
      setIsUploading(false);
      return localFiles;
    }

    onUploadStart?.(uploadableFiles);

    let uploadedFiles: ExtFile[] = [];
    const canApplyForGeneration = () =>
      uploadGenerationRef.current === currentGeneration;
    const canApplyForFile = (id: string | number | undefined) =>
      id !== undefined &&
      canApplyForGeneration() &&
      !abortedFileIdsRef.current.has(id);

    uploadableFiles.forEach((file) => {
      if (file.id !== undefined) {
        abortedFileIdsRef.current.delete(file.id);
      }
    });

    try {
      if (action) {
        uploadedFiles = await uploadWithServerAction(
          uploadableFiles,
          canApplyForGeneration,
          canApplyForFile
        );
      } else if (url || urlFromExtFile) {
        uploadedFiles = await uploadWithStrategyRoute(
          uploadableFiles,
          canApplyForGeneration,
          canApplyForFile
        );
      } else {
        throw new Error(
          "No upload configuration provided (action, url, or urlFromExtFile)"
        );
      }
    } catch (error) {
      console.error("Upload error:", error);
      
      // Mark all files as error
      const errorFiles = uploadableFiles.map((f) => ({
        ...f,
        uploadStatus: "error" as const,
        uploadMessage: error instanceof Error ? error.message : "Upload failed",
      }));

      uploadedFiles = errorFiles;

      if (canApplyForGeneration()) {
        setLocalFiles((prev) =>
          prev.map((f) => {
            const errorFile = errorFiles.find((ef) => ef.id === f.id);
            if (!errorFile || abortedFileIdsRef.current.has(errorFile.id as string | number)) {
              return f;
            }
            return errorFile;
          })
        );
      }
    } finally {
      if (canApplyForGeneration()) {
        setIsUploading(false);
        onUploadFinish?.(uploadedFiles);
      }
    }

    return uploadedFiles;
  }, [
    isUploading,
    localFiles,
    action,
    url,
    urlFromExtFile,
    method,
    headers,
    uploadLabel,
    asBlob,
    chunked,
    chunkSize,
    maxConcurrentUploads,
    onUploadStart,
    onUploadFinish,
    uploadWithServerAction,
    uploadWithStrategyRoute,
  ]);

  /**
   * Abort upload
   */
  const abortUpload = React.useCallback(() => {
    uploadGenerationRef.current += 1;

    localFilesRef.current.forEach((file) => {
      if (
        file.id !== undefined &&
        (file.uploadStatus === "uploading" || file.uploadStatus === "preparing")
      ) {
        abortedFileIdsRef.current.add(file.id);
      }
      file.xhr?.abort();
    });

    setIsUploading(false);
    
    // Mark all uploading/preparing files as aborted
    setLocalFiles((prev) =>
      prev.map((f) =>
        f.uploadStatus === "uploading" || f.uploadStatus === "preparing"
          ? {
              ...f,
              uploadStatus: "aborted" as const,
              uploadMessage: "Upload aborted by user",
            }
          : f
      )
    );
  }, []);

  /**
   * Abort upload for one file
   */
  const abortFileUpload = React.useCallback((id: string | number) => {
    let hasOtherActiveUploads = false;

    setLocalFiles((prev) => {
      const next = prev.map((f) => {
        if (f.id === id) {
          abortedFileIdsRef.current.add(id);
          f.xhr?.abort();

          if (f.uploadStatus === "uploading" || f.uploadStatus === "preparing") {
            return {
              ...f,
              uploadStatus: "aborted" as const,
              uploadMessage: "Upload aborted by user",
            };
          }
        }

        if (f.id !== id && (f.uploadStatus === "uploading" || f.uploadStatus === "preparing")) {
          hasOtherActiveUploads = true;
        }

        return f;
      });

      return next;
    });

    if (!hasOtherActiveUploads) {
      setIsUploading(false);
    }
  }, []);

  /**
   * Drag handlers
   */
  const getDragHandlers = React.useCallback(() => {
    return {
      onDragEnter: (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      },
      onDragLeave: (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      },
      onDragOver: (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "link";
      },
      onDrop: (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        
        const { files } = e.dataTransfer;
        if (files && files.length > 0) {
          addFiles(files);
        }
      },
    };
  }, [addFiles]);

  /**
   * Input props
   */
  const getInputProps = React.useCallback(() => {
    return {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
          addFiles(files);
        }
      },
      accept,
      multiple: maxFiles !== 1,
    };
  }, [addFiles, accept, maxFiles]);

  return {
    // State
    files: localFiles,
    numberOfValidFiles,
    isUploading,
    isDragging,
    dropzoneId,
    
    // Actions
    addFiles,
    removeFile,
    updateFile,
    clearFiles,
    cleanFiles,
    
    // Upload
    uploadFiles,
    abortUpload,
    abortFileUpload,
    
    // Validation
    validateFiles,
    
    // UI Helpers
    getDragHandlers,
    getInputProps,
  };
};
