"use client";

import { useFilesUI } from "@files-ui/react";
import type { ExtFile } from "@files-ui/core";
import { uploadFileAction } from "./actions/upload";

export default function HeadlessDemo() {
  const {
    files,
    numberOfValidFiles,
    isUploading,
    isDragging,
    removeFile,
    uploadFiles,
    getDragHandlers,
    getInputProps,
  } = useFilesUI({
    accept: "image/*,.pdf,.docx",
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 5,
    action: uploadFileAction, // Use Server Action
    onChange: (files: ExtFile[]) => {
      console.log("Files changed:", files);
    },
    onUploadFinish: (files: ExtFile[]) => {
      console.log("Upload finished:", files);
    },
  });

  // Compute upload button label
  const fileLabel = numberOfValidFiles === 1 ? "File" : "Files";
  const uploadButtonLabel = `Upload ${numberOfValidFiles} ${fileLabel}`;

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          useFilesUI Headless Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Next.js 16 App Router + Server Actions + Custom UI
        </p>

        {/* Custom Dropzone UI */}
        <div
          {...getDragHandlers()}
          className={`
            border-2 border-dashed rounded-xl p-12 mb-6 transition-all
            ${
              isDragging
                ? "border-blue-500 bg-blue-50 scale-105"
                : "border-gray-300 bg-white hover:border-gray-400"
            }
          `}
        >
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg text-gray-700 mb-2">
              {isDragging ? (
                <span className="font-semibold text-blue-600">Drop files here!</span>
              ) : (
                "Drag & drop files here"
              )}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              or click to browse (max 5 files, 10MB each)
            </p>
            <label
              htmlFor="file-input"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors"
            >
              Browse Files
            </label>
            <input
              id="file-input"
              type="file"
              {...getInputProps()}
              className="hidden"
            />
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Selected Files ({numberOfValidFiles}/{files.length} valid)
            </h2>
            <div className="space-y-3">
              {files.map((file: ExtFile) => (
                <div
                  key={file.id}
                  className={`
                    flex items-center justify-between p-4 rounded-lg border-2
                    ${
                      file.valid
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${file.valid ? "bg-green-200" : "bg-red-200"}
                    `}
                    >
                      <span className="text-lg">
                        {file.type?.startsWith("image/") ? "🖼️" : "📄"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size! / 1024).toFixed(2)} KB
                      </p>
                      {!file.valid && file.errors && (
                        <p className="text-xs text-red-600 mt-1">
                          {file.errors.map((e: { message: string }) => e.message).join(", ")}
                        </p>
                      )}
                      {file.uploadStatus && (
                        <p className="text-xs text-gray-600 mt-1">
                          Status: {file.uploadStatus}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(file.id!)}
                    className="ml-4 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Button */}
        {numberOfValidFiles > 0 && (
          <button
            onClick={uploadFiles}
            disabled={isUploading}
            className={`
              w-full py-4 px-6 rounded-xl text-white font-semibold text-lg
              transition-all transform hover:scale-105
              ${
                isUploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              }
            `}
          >
            {isUploading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading via Server Action...
              </span>
            ) : (
              uploadButtonLabel
            )}
          </button>
        )}

        {/* Info Panel */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            🎯 Demo Features
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>
                <strong>Headless Hook:</strong> Complete control over UI with useFilesUI
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>
                <strong>Server Actions:</strong> Next.js 16 App Router native upload
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>
                <strong>Custom Validation:</strong> Max 5 files, 10MB each, images/PDFs only
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>
                <strong>Drag & Drop:</strong> Full drag-and-drop support with visual feedback
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>
                <strong>Tailwind CSS:</strong> Fully styled with Tailwind (no @files-ui styles)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
