import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Ensure storage directory exists
const STORAGE_DIR = path.join(__dirname, 'storage');
await fs.mkdir(STORAGE_DIR, { recursive: true });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use('/uploads', express.static(STORAGE_DIR));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: STORAGE_DIR,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB
});

// File metadata store
const filesDb: Record<string, any> = {};

// Standard upload endpoint
app.post('/api/upload', upload.array('file', 20), async (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    const results = files.map((file, index) => {
      const id = file.filename;
      const fileData = {
        id,
        name: file.originalname,
        size: file.size,
        type: file.mimetype,
        url: `/uploads/${file.filename}`,
        uploadedAt: new Date().toISOString()
      };
      filesDb[id] = fileData;
      return fileData;
    });

    res.json({
      success: true,
      payload: results.length === 1 ? results[0] : results
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Chunked upload endpoint
const chunksStore = new Map<string, { chunks: Buffer[], totalChunks: number, metadata: any }>();

app.post('/api/upload/chunk', express.raw({ limit: '10mb', type: 'application/octet-stream' }), async (req, res) => {
  try {
    const { chunkIndex, totalChunks, fileId, fileName, fileSize, fileType } = req.query;
    const chunk = req.body as Buffer;

    if (!chunksStore.has(fileId as string)) {
      chunksStore.set(fileId as string, {
        chunks: [],
        totalChunks: parseInt(totalChunks as string),
        metadata: { fileName, fileSize, fileType }
      });
    }

    const fileChunks = chunksStore.get(fileId as string)!;
    fileChunks.chunks[parseInt(chunkIndex as string)] = chunk;

    // Check if all chunks received
    if (fileChunks.chunks.filter(Boolean).length === fileChunks.totalChunks) {
      // Merge chunks
      const completeFile = Buffer.concat(fileChunks.chunks);
      const filename = `${Date.now()}-${fileName}`;
      const filepath = path.join(STORAGE_DIR, filename);
      
      await fs.writeFile(filepath, completeFile);
      
      const fileData = {
        id: filename,
        name: fileName as string,
        size: parseInt(fileSize as string),
        type: fileType as string,
        url: `/uploads/${filename}`,
        uploadedAt: new Date().toISOString()
      };
      
      filesDb[filename] = fileData;
      chunksStore.delete(fileId as string);
      
      return res.json({ success: true, payload: fileData });
    }

    res.json({ success: true, message: `Chunk ${chunkIndex} received` });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// List files
app.get('/api/files', async (req, res) => {
  res.json({ success: true, files: Object.values(filesDb) });
});

// Download file
app.get('/api/files/:id/download', async (req, res) => {
  const fileData = filesDb[req.params.id];
  if (!fileData) {
    return res.status(404).json({ success: false, error: 'File not found' });
  }
  
  const filepath = path.join(STORAGE_DIR, req.params.id);
  res.download(filepath, fileData.name);
});

// Delete file
app.delete('/api/files/:id', async (req, res) => {
  const fileData = filesDb[req.params.id];
  if (!fileData) {
    return res.status(404).json({ success: false, error: 'File not found' });
  }
  
  try {
    const filepath = path.join(STORAGE_DIR, req.params.id);
    await fs.unlink(filepath);
    delete filesDb[req.params.id];
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
