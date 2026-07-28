import { FileMosaicSkeleton } from '@files-ui/react/client/file-mosaic';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-96 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
        <FileMosaicSkeleton />
      </div>
    </div>
  );
}
