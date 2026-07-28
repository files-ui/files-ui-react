# Vite File Manager

A complete file management dashboard demonstrating `@files-ui/react` v2.0 features with Express backend.

## Features

- **Standard Upload** - Dropzone with FileMosaic, validation, auto-upload, concurrent uploads (3 simultaneous)
- **Chunked Upload** - Large file uploads (up to 100MB) with 1MB chunks
- **Browse Files** - Grid/list toggle, size variants (xs/small/medium/large), skeletons while loading
- **Headless Upload** - Fully custom UI built with `useFilesUI` hook (no visual components)
- **Settings** - Global font family and dark mode configuration via `FilesUiProvider`
- **Express Backend** - Upload, download, delete endpoints with multer

## Tech Stack

- **Frontend:** Vite 6 + React 19 + TypeScript
- **Backend:** Express 5 + multer
- **UI Library:** @files-ui/react v2.0.0 (local link)

## Prerequisites

- Node.js 20+
- npm or yarn

## Installation

```bash
npm install
```

## Development

Run both frontend and backend concurrently:

```bash
npm run dev
```

This starts:
- **Frontend** on http://localhost:3000
- **Backend** on http://localhost:3001

## Build

```bash
npm run build
```

## Features Demonstrated

### v2.0 New Features
- ✅ `useFilesUI` headless hook
- ✅ `fontFamily` config in FilesUiProvider
- ✅ Size `variant` prop (xs/small/medium/large)
- ✅ Skeleton components (FileMosaicSkeleton, FileCardSkeleton)

### Core Features
- ✅ `<Dropzone>` with validation
- ✅ `<FileMosaic>` grid view
- ✅ `<FileCard>` list view
- ✅ Concurrent uploads (maxConcurrentUploads: 3)
- ✅ Chunked uploads for large files
- ✅ Upload progress tracking
- ✅ File validation (accept, maxFileSize, maxFiles)
- ✅ Download from server
- ✅ Delete files
- ✅ Dark mode

## Project Structure

```
vite-file-manager/
├── server/
│   ├── index.ts           # Express server
│   └── storage/           # Uploaded files
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── UploadPage.tsx
│   │   ├── UploadChunkedPage.tsx
│   │   ├── BrowsePage.tsx
│   │   ├── HeadlessPage.tsx
│   │   └── SettingsPage.tsx
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/upload` | Upload files |
| POST | `/api/upload/chunk` | Chunked upload |
| GET | `/api/files` | List all files |
| GET | `/api/files/:id/download` | Download file |
| DELETE | `/api/files/:id` | Delete file |
