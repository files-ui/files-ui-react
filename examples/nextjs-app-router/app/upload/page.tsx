"use client";

import * as React from "react";
import { useFilesUI, FileInputButton, FileMosaic } from "@files-ui/react";
import { uploadFileAction } from "../actions";

export default function UploadPage() {
  const {
    files,
    addFiles,
    uploadFiles,
    removeFile,
    isUploading,
  } = useFilesUI({
    action: uploadFileAction,
    uploadLabel: "file",
    maxFiles: 5,
    accept: "image/*,.pdf",
  });

  return (
    <main>
      <h1>useFilesUI + Server Action</h1>
      <p>
        Select files, then click upload to call a Next.js Server Action.
      </p>

      <FileInputButton
        value={files}
        onChange={(incoming) => addFiles(incoming as File[])}
        label="Select files"
      />

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {files.map((item) => (
          <FileMosaic
            key={String(item.id)}
            {...item}
            onDelete={(fileId) => {
              if (fileId !== undefined) {
                removeFile(fileId);
              }
            }}
            info
            preview
          />
        ))}
      </div>

      <button
        type="button"
        disabled={isUploading || files.length === 0}
        onClick={() => {
          void uploadFiles();
        }}
        style={{ marginTop: 16, padding: "8px 14px", cursor: "pointer" }}
      >
        {isUploading ? "Uploading..." : "Upload files"}
      </button>
    </main>
  );
}
