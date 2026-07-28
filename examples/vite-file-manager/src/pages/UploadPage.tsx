import { useState } from 'react';
import { Dropzone, FileMosaic, ExtFile } from '@files-ui/react';

export default function UploadPage() {
  const [files, setFiles] = useState<ExtFile[]>([]);

  const handleUploadFinish = (files: ExtFile[]) => {
    console.log('Upload finished:', files);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Standard Upload</h2>
        <p>Upload files with validation, progress tracking, and concurrent uploads</p>
      </div>

      <div className="section">
        <div className="card">
          <Dropzone
            value={files}
            onChange={setFiles}
            accept="image/*,.pdf,.doc,.docx"
            maxFileSize={10 * 1024 * 1024} // 10MB
            maxFiles={10}
            uploadConfig={{
              url: 'http://localhost:3001/api/upload',
              method: 'POST',
              uploadLabel: 'file',
              autoUpload: true,
              maxConcurrentUploads: 3
            }}
            onUploadFinish={handleUploadFinish}
            label="Drop files here or click to browse"
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
      </div>

      <div className="section">
        <h3>Configuration</h3>
        <div className="card">
          <ul style={{ lineHeight: '2', color: '#666' }}>
            <li><strong>Accept:</strong> Images, PDF, Word documents</li>
            <li><strong>Max File Size:</strong> 10 MB</li>
            <li><strong>Max Files:</strong> 10</li>
            <li><strong>Auto Upload:</strong> Enabled</li>
            <li><strong>Concurrent Uploads:</strong> 3 at a time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
