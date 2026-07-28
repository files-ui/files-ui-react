import { useState, useEffect } from 'react';
import { FileMosaic, FileCard, FileMosaicSkeleton, FileCardSkeleton } from '@files-ui/react';

type ViewMode = 'grid' | 'list';
type SizeVariant = 'xs' | 'small' | 'medium' | 'large';

interface FileData {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: string;
}

export default function BrowsePage() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sizeVariant, setSizeVariant] = useState<SizeVariant>('medium');

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/files');
      const data = await res.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error('Failed to fetch files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/api/files/${id}`, { method: 'DELETE' });
      setFiles(files.filter(f => f.id !== id));
    } catch (error) {
      console.error('Failed to delete file:', error);
    }
  };

  const handleDownload = (id: string) => {
    window.open(`http://localhost:3001/api/files/${id}/download`, '_blank');
  };

  return (
    <div>
      <div className="page-header">
        <h2>Browse Files</h2>
        <p>Grid/list toggle, size variants, download, and delete</p>
      </div>

      <div className="section">
        <div className="card">
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <label style={{ marginRight: '0.5rem' }}>View:</label>
              <select value={viewMode} onChange={(e) => setViewMode(e.target.value as ViewMode)}>
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </div>
            <div>
              <label style={{ marginRight: '0.5rem' }}>Size:</label>
              <select value={sizeVariant} onChange={(e) => setSizeVariant(e.target.value as SizeVariant)}>
                <option value="xs">Extra Small</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <button onClick={fetchFiles}>Refresh</button>
          </div>

          {loading ? (
            <div style={{ display: viewMode === 'grid' ? 'flex' : 'block', gap: '1rem', flexWrap: 'wrap' }}>
              {viewMode === 'grid' ? (
                <>
                  <FileMosaicSkeleton variant={sizeVariant} />
                  <FileMosaicSkeleton variant={sizeVariant} />
                  <FileMosaicSkeleton variant={sizeVariant} />
                </>
              ) : (
                <>
                  <FileCardSkeleton variant={sizeVariant} />
                  <FileCardSkeleton variant={sizeVariant} />
                  <FileCardSkeleton variant={sizeVariant} />
                </>
              )}
            </div>
          ) : files.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', padding: '3rem' }}>
              No files uploaded yet. Go to Upload page to add files.
            </p>
          ) : (
            <div style={{ 
              display: viewMode === 'grid' ? 'flex' : 'block', 
              gap: '1rem', 
              flexWrap: 'wrap' 
            }}>
              {viewMode === 'grid' ? (
                files.map((file) => (
                  <FileMosaic
                    key={file.id}
                    id={file.id}
                    name={file.name}
                    size={file.size}
                    type={file.type}
                    imageUrl={file.type.startsWith('image/') ? `http://localhost:3001${file.url}` : undefined}
                    downloadUrl={`http://localhost:3001/api/files/${file.id}/download`}
                    onDelete={handleDelete}
                    variant={sizeVariant}
                    preview
                    resultOnTooltip
                  />
                ))
              ) : (
                files.map((file) => (
                  <FileCard
                    key={file.id}
                    id={file.id}
                    name={file.name}
                    size={file.size}
                    type={file.type}
                    imageUrl={file.type.startsWith('image/') ? `http://localhost:3001${file.url}` : undefined}
                    downloadUrl={`http://localhost:3001/api/files/${file.id}/download`}
                    onDelete={handleDelete}
                    variant={sizeVariant}
                    preview
                    resultOnTooltip
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
