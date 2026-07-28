import { useState } from 'react';
import { Dropzone, FileMosaic, ExtFile } from '@files-ui/react';

export default function UploadChunkedPage() {
  const [files, setFiles] = useState<ExtFile[]>([]);

  return (
    <div>
      <div className="page-header">
        <h2>Chunked Upload</h2>
        <p>Upload large files using chunked upload strategy</p>
      </div>

      <div className="section">
        <div className="card">
          <Dropzone
            value={files}
            onChange={setFiles}
            maxFileSize={100 * 1024 * 1024} // 100MB
            maxFiles={5}
            uploadConfig={{
              url: 'http://localhost:3001/api/upload/chunk',
              method: 'POST',
              uploadLabel: 'file',
              autoUpload: false,
              chunked: true,
              chunkSize: 1024 * 1024 // 1MB chunks
            } as any}
            label="Drop large files here (up to 100MB)"
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
        <h3>Chunked Upload Configuration</h3>
        <div className="card">
          <ul style={{ lineHeight: '2', color: '#666' }}>
            <li><strong>Max File Size:</strong> 100 MB</li>
            <li><strong>Chunk Size:</strong> 1 MB per chunk</li>
            <li><strong>Strategy:</strong> Sequential chunk upload with reassembly on server</li>
            <li><strong>Benefits:</strong> Resume capability, progress per chunk, reduced memory usage</li>
          </ul>
          <p style={{ marginTop: '1rem', color: '#999' }}>
            Note: Large files are split into 1MB chunks and uploaded sequentially.
            The server reassembles them upon receiving all chunks.
          </p>
        </div>
      </div>
    </div>
  );
}
