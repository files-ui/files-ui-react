import { promises as fs } from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'data', 'photos.json');

export interface Photo {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: string;
}

async function ensureDbFile() {
  try {
    await fs.mkdir(path.dirname(DB_FILE), { recursive: true });
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify({ photos: [] }));
    }
  } catch (error) {
    console.error('Error ensuring DB file:', error);
  }
}

export async function readPhotos(): Promise<Photo[]> {
  await ensureDbFile();
  try {
    const data = await fs.readFile(DB_FILE, 'utf-8');
    const json = JSON.parse(data);
    return json.photos || [];
  } catch (error) {
    return [];
  }
}

export async function savePhoto(photo: Photo) {
  await ensureDbFile();
  const photos = await readPhotos();
  photos.push(photo);
  await fs.writeFile(DB_FILE, JSON.stringify({ photos }, null, 2));
}

export async function deletePhotoById(id: string) {
  await ensureDbFile();
  const photos = await readPhotos();
  const filtered = photos.filter(p => p.id !== id);
  await fs.writeFile(DB_FILE, JSON.stringify({ photos: filtered }, null, 2));
}
