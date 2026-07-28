'use client';

import { useState } from 'react';
import { FileMosaic } from '@files-ui/react/client/file-mosaic';
import { FullScreen } from '@files-ui/react/client/full-screen';
import { deletePhoto } from '../actions/upload';

interface Photo {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
}

interface GalleryGridProps {
  photos: Photo[];
}

export default function GalleryGrid({ photos: initialPhotos }: GalleryGridProps) {
  const [photos, setPhotos] = useState(initialPhotos);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | undefined>();

  const handleDelete = async (id: string | number) => {
    const result = await deletePhoto(id.toString());
    if (result.success) {
      setPhotos(photos.filter(p => p.id !== id));
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <FileMosaic
            key={photo.id}
            id={photo.id}
            name={photo.name}
            size={photo.size}
            type={photo.type}
            imageUrl={photo.url}
            onDelete={handleDelete}
            preview
            resultOnTooltip
            onSee={() => setFullscreenSrc(photo.url)}
          />
        ))}
      </div>

      {fullscreenSrc && (
        <FullScreen
          open={!!fullscreenSrc}
          onClose={() => setFullscreenSrc(undefined)}
          srcImage={fullscreenSrc}
        />
      )}
    </>
  );
}
