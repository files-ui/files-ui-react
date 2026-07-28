import { FileMosaicSkeleton, FileCardSkeleton } from '@files-ui/react';

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>File management system showcasing Files UI v2.0</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Total Files</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">0 MB</div>
          <div className="stat-label">Total Size</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Uploads Today</div>
        </div>
      </div>

      <div className="section">
        <h3>Recent Uploads (Loading State Demo)</h3>
        <div className="card">
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            These skeleton components show loading placeholders while data loads:
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <FileMosaicSkeleton />
            <FileMosaicSkeleton />
            <FileMosaicSkeleton />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <FileCardSkeleton />
            <FileCardSkeleton />
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Features Demonstrated</h3>
        <div className="card">
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Upload:</strong> Standard Dropzone with FileMosaic, validation, progress tracking</li>
            <li><strong>Chunked Upload:</strong> Large file uploads with chunked strategy</li>
            <li><strong>Browse:</strong> Grid/list toggle with size variants, skeletons while loading</li>
            <li><strong>Headless:</strong> Custom UI built entirely with useFilesUI hook</li>
            <li><strong>Settings:</strong> Global font family and dark mode configuration</li>
            <li><strong>Backend:</strong> Express server with multer, concurrent uploads, download/delete</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
