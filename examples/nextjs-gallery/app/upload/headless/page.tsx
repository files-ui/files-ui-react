'use client';

import { useFilesUI } from '@files-ui/react';
import { uploadPhotos } from '../../actions/upload';

export default function HeadlessUploadPage() {
  const {
    files,
    isUploading,
    uploadFiles,
    getDragHandlers,
    getInputProps,
    removeFile
  } = useFilesUI({
    accept: 'image/*',
    maxFileSize: 15 * 1024 * 1024,
    maxFiles: 20,
    action: uploadPhotos
  });

  const dragHandlers = getDragHandlers();
  const inputProps = getInputProps();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Headless Upload</h1>
        <p className="mt-2 text-gray-600">
          Custom UI built with <code className="text-sm bg-gray-100 px-2 py-1 rounded">useFilesUI</code> hook + Server Actions
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div
          {...dragHandlers}
          className="border-2 border-dashed border-blue-400 rounded-lg p-12 text-center cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition"
        >
          <input {...inputProps} className="hidden" id="file-input" />
          <label htmlFor="file-input" className="cursor-pointer">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-lg text-gray-700 mb-2">Drop images here or click to browse</p>
            <p className="text-sm text-gray-500">Images up to 15MB • Max 20 files</p>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Selected Files ({files.length})</h3>
              <button
                onClick={() => uploadFiles()}
                disabled={isUploading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'Upload All'}
              </button>
            </div>

            <div className="space-y-2">
              {files.map((file) => (
                <div key={file.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      file.uploadStatus === 'success' ? 'bg-green-100 text-green-800' :
                      file.uploadStatus === 'error' ? 'bg-red-100 text-red-800' :
                      file.uploadStatus === 'uploading' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {file.uploadStatus || 'ready'}
                    </span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Headless Hook + Server Actions</h3>
        <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
{`const { files, isUploading, uploadFiles, getDragHandlers, getInputProps } = useFilesUI({
  accept: 'image/*',
  maxFileSize: 15 * 1024 * 1024,
  action: uploadPhotos  // Server Action (no URL needed!)
});`}
        </pre>
        <p className="mt-3 text-gray-700">
          This demonstrates the power of combining the headless <code className="bg-white px-2 py-1 rounded">useFilesUI</code> hook 
          with Next.js Server Actions for a completely custom upload experience.
        </p>
      </div>
    </div>
  );
}
