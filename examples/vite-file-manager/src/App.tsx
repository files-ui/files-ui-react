import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FilesUiProvider } from '@files-ui/react';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
import UploadChunkedPage from './pages/UploadChunkedPage';
import BrowsePage from './pages/BrowsePage';
import HeadlessPage from './pages/HeadlessPage';
import SettingsPage from './pages/SettingsPage';

type FontFamily = 'Poppins' | 'Inter' | 'Roboto' | 'system';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState<FontFamily | undefined>(undefined);

  const fontMap: Record<FontFamily, string | undefined> = {
    'Poppins': 'Poppins',
    'Inter': 'Inter',
    'Roboto': 'Roboto',
    'system': undefined
  };

  return (
    <FilesUiProvider config={{ 
      darkMode, 
      fontFamily: fontFamily ? fontMap[fontFamily] : undefined 
    }}>
      <BrowserRouter>
        <div style={{ 
          minHeight: '100vh', 
          background: darkMode ? '#1a1a1a' : '#f5f5f5',
          color: darkMode ? '#fff' : '#000'
        }}>
          <nav style={{ 
            padding: '1rem 2rem', 
            background: darkMode ? '#2a2a2a' : '#fff',
            borderBottom: `1px solid ${darkMode ? '#444' : '#ddd'}`,
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Files UI File Manager</h1>
              <Link to="/">Dashboard</Link>
              <Link to="/upload">Upload</Link>
              <Link to="/upload/chunked">Chunked</Link>
              <Link to="/browse">Browse</Link>
              <Link to="/headless">Headless</Link>
              <Link to="/settings">Settings</Link>
            </div>
          </nav>
          <main style={{ padding: '0 2rem 2rem' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/upload/chunked" element={<UploadChunkedPage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/headless" element={<HeadlessPage />} />
              <Route 
                path="/settings" 
                element={
                  <SettingsPage 
                    darkMode={darkMode}
                    onDarkModeChange={setDarkMode}
                    fontFamily={fontFamily}
                    onFontFamilyChange={setFontFamily}
                  />
                } 
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </FilesUiProvider>
  );
}

export default App;
