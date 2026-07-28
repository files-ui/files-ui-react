interface SettingsPageProps {
  darkMode: boolean;
  onDarkModeChange: (darkMode: boolean) => void;
  fontFamily: 'Poppins' | 'Inter' | 'Roboto' | 'system' | undefined;
  onFontFamilyChange: (font: 'Poppins' | 'Inter' | 'Roboto' | 'system' | undefined) => void;
}

export default function SettingsPage({
  darkMode,
  onDarkModeChange,
  fontFamily,
  onFontFamilyChange
}: SettingsPageProps) {
  return (
    <div>
      <div className="page-header">
        <h2>Settings</h2>
        <p>Configure global font family and dark mode via FilesUiProvider</p>
      </div>

      <div className="section">
        <h3>Theme Settings</h3>
        <div className="card">
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => onDarkModeChange(e.target.checked)}
              />
              <span>Enable Dark Mode</span>
            </label>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              All Files UI components will use dark mode colors
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Font Settings</h3>
        <div className="card">
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Global Font Family
            </label>
            <select
              value={fontFamily || 'system'}
              onChange={(e) => onFontFamilyChange(
                e.target.value === 'system' ? undefined : e.target.value as any
              )}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '200px'
              }}
            >
              <option value="system">System Default</option>
              <option value="Poppins">Poppins</option>
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
            </select>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Changes the font family for all Files UI components via CSS custom property
            </p>
          </div>

          <div style={{ 
            padding: '1rem', 
            background: darkMode ? '#1a1a1a' : '#f8f9fa', 
            borderRadius: '4px',
            border: `1px solid ${darkMode ? '#444' : '#e0e0e0'}`
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>How it works:</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
              When you select a font, the <code>FilesUiProvider</code> injects a single <code>&lt;style&gt;</code> element 
              that sets the CSS custom property <code>--files-ui-font-family</code> on <code>:root</code>. 
              All component CSS files reference this variable with Poppins as fallback:
            </p>
            <pre style={{ 
              marginTop: '0.75rem', 
              padding: '0.75rem', 
              background: darkMode ? '#2a2a2a' : '#fff',
              borderRadius: '4px',
              fontSize: '0.85rem',
              overflow: 'auto'
            }}>
{`font-family: var(--files-ui-font-family, 
  "Poppins", -apple-system, BlinkMacSystemFont, 
  "Segoe UI", Roboto, sans-serif);`}
            </pre>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Provider Configuration</h3>
        <div className="card">
          <pre style={{ 
            background: darkMode ? '#1a1a1a' : '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto' 
          }}>
{`<FilesUiProvider config={{ 
  darkMode: ${darkMode}, 
  fontFamily: ${fontFamily ? `"${fontFamily}"` : 'undefined'}
}}>
  <App />
</FilesUiProvider>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
