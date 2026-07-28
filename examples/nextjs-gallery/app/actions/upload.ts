'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { readPhotos, savePhoto, deletePhotoById } from '../lib/db';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function uploadPhotos(formData: FormData) {
  try {
    // Ensure upload directory exists
    await mkdir(UPLOAD_DIR, { recursive: true });

    const file = formData.get('file') as File;
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return { success: false, error: 'Only images are allowed' };
    }

    // Validate file size (15MB)
    if (file.size > 15 * 1024 * 1024) {
      return { success: false, error: 'File too large (max 15MB)' };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = uniqueSuffix + '-' + file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filepath = path.join(UPLOAD_DIR, filename);

    await writeFile(filepath, buffer);

    // Save to "database"
    const photo = {
      id: uniqueSuffix.toString(),
      name: file.name,
      url: `/uploads/${filename}`,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString()
    };

    await savePhoto(photo);

    return { 
      success: true, 
      payload: photo
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deletePhoto(id: string) {
  try {
    await deletePhotoById(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
