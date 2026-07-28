import { useFilesUI } from '@files-ui/react';

export default function HeadlessPage() {
  const {
    files,
    isUploading,
    uploadFiles,
    getDragHandlers,
    getInputProps,
    removeFile
  } = useFilesUI({
    accept: 'image/*,.pdf',
    maxFileSize: 10 * 1024 * 1024,
    maxFiles: 10,
    url: 'http://localhost:3001/api/upload',
    method: 'POST',
    uploadLabel: 'file',
    maxConcurrentUploads: 3
  });

  const dragHandlers = getDragHandlers();
  const inputProps = getInputProps();

  return (
    <div>
      <div className="page-header">
        <h2>Headless Upload (useFilesUI Hook)</h2>
        <p>Fully custom UI built with the headless useFilesUI hook</p>
      </div>

      <div className="section">
        <div className="card">
          <div
            {...dragHandlers}
            style={{
              border: '2px dashed #1976d2',
              borderRadius: '8px',
              padding: '3rem',
              textAlign: 'center',
              cursor: 'pointer',
              background: '#f8f9fa',
              transition: 'all 0.2s'
            }}
          >
            <input {...inputProps} style={{ display: 'none' }} id="file-input" />
            <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
              <p style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>
                Drop files here or click to browse
              </p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                Images and PDFs up to 10MB • Max 10 files
              </p>
            </label>
          </div>

          {files.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Selected Files ({files.length})</h3>
                <button
                  onClick={() => uploadFiles()}
                  disabled={isUploading}
                  style={{
                    padding: '0.5rem 1.5rem',
                    background: isUploading ? '#ccc' : '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isUploading ? 'not-allowed' : 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  {isUploading ? 'Uploading...' : 'Upload All'}
                </button>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem' }}>Name</th>
                    <th style={{ padding: '0.75rem' }}>Size</th>
                    <th style={{ padding: '0.75rem' }}>Status</th>
                    <th style={{ padding: '0.75rem' }}>Progress</th>
                    <th style={{ padding: '0.75rem' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr key={file.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '0.75rem' }}>{file.name}</td>
                      <td style={{ padding: '0.75rem' }}>
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          background: 
                            file.uploadStatus === 'success' ? '#4caf50' :
                            file.uploadStatus === 'error' ? '#f44336' :
                            file.uploadStatus === 'uploading' ? '#2196f3' :
                            '#9e9e9e',
                          color: 'white'
                        }}>
                          {file.uploadStatus || 'ready'}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        {file.uploadStatus === 'uploading' && (
                          <div style={{ 
                            width: '100px', 
                            height: '8px', 
                            background: '#e0e0e0', 
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${file.uploadPercent || 0}%`,
                              height: '100%',
                              background: '#2196f3',
                              transition: 'width 0.3s'
                            }} />
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        <button
                          onClick={() => removeFile(file.id)}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.85rem'
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h3>Hook Configuration</h3>
        <div className="card">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`const {
  files,
  isUploading,
  uploadFiles,
  getDragHandlers,
  getInputProps,
  removeFile
} = useFilesUI({
  accept: 'image/*,.pdf',
  maxFileSize: 10 * 1024 * 1024,
  maxFiles: 10,
  url: 'http://localhost:3001/api/upload',
  method: 'POST',
  uploadLabel: 'file',
  maxConcurrentUploads: 3
});`}
          </pre>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            This page demonstrates building a completely custom upload UI using only the useFilesUI hook. 
            No Files UI visual components are used—just the headless logic.
          </p>
        </div>
      </div>
    </div>
  );
}
