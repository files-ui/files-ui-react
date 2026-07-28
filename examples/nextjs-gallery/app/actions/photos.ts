'use server';

import { readPhotos } from '../lib/db';

export async function getPhotos() {
  return await readPhotos();
}
