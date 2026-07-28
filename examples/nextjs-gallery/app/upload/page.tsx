'use client';

import { useState } from 'react';
import { Dropzone, FileMosaic, ExtFile } from '@files-ui/react/client/dropzone';
import { uploadPhotos } from '../actions/upload';

export default function UploadPage() {
  const [files, setFiles] = useState<ExtFile[]>([]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Photos</h1>
        <p className="mt-2 text-gray-600">
          Upload via Server Actions - demonstrates the <code className="text-sm bg-gray-100 px-2 py-1 rounded">action</code> prop
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Dropzone
          value={files}
          onChange={setFiles}
          accept="image/*"
          maxFileSize={15 * 1024 * 1024}
          maxFiles={20}
          action={uploadPhotos}
          label="Drop images here or click to browse"
          footer={false}
        >
          {files.map((file) => (
            <FileMosaic
              key={file.id}
              {...file}
              onDelete={(id) => setFiles(files.filter(f => f.id !== id))}
              resultOnTooltip
              preview
            />
          ))}
        </Dropzone>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Configuration</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Accept:</strong> Images only</li>
          <li><strong>Max File Size:</strong> 15 MB</li>
          <li><strong>Max Files:</strong> 20</li>
          <li><strong>Upload Method:</strong> Next.js Server Actions (no URL needed)</li>
          <li><strong>RSC:</strong> Client subpath import <code className="text-sm bg-white px-2 py-1 rounded">@files-ui/react/client/dropzone</code></li>
        </ul>
      </div>
    </div>
  );
}
