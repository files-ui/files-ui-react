import { getPhotos } from './actions/photos';
import GalleryGrid from './components/GalleryGrid';

export default async function HomePage() {
  const photos = await getPhotos();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
        <p className="mt-2 text-gray-600">
          Demonstrating Next.js 16 App Router with Server Components and Files UI v2.0
        </p>
      </div>

      {photos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No photos yet. Upload some photos to get started!</p>
          <a
            href="/upload"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Upload Photos
          </a>
        </div>
      ) : (
        <GalleryGrid photos={photos} />
      )}
    </div>
  );
}
