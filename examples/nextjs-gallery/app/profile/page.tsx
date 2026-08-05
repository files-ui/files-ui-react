'use client';

import { useState } from 'react';
import { Avatar } from '@files-ui/react';
import type { ExtFile } from '@files-ui/react';
import { uploadPhotos } from '../actions/upload';

export default function ProfilePage() {
  const [files, setFiles] = useState<ExtFile[]>([]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">Avatar component with Server Action upload</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex flex-col items-center">
          <Avatar
            value={files}
            onChange={setFiles}
            accept="image/*"
            maxFileSize={5 * 1024 * 1024}
            action={uploadPhotos}
            variant="circle"
            emptyLabel="Click to upload avatar"
            style={{ width: '200px', height: '200px' }}
          />
          <p className="mt-4 text-gray-600">Click the avatar to upload a new profile picture</p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Avatar Component Features</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Shape Variants:</strong> circle, square, rounded</li>
          <li><strong>Server Action:</strong> Upload via Next.js Server Actions</li>
          <li><strong>Validation:</strong> Images only, max 5 MB</li>
          <li><strong>Import:</strong> <code className="text-sm bg-white px-2 py-1 rounded">import {"{ Avatar }"} from &apos;@files-ui/react&apos;</code></li>
        </ul>
      </div>
    </div>
  );
}
