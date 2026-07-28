# Next.js Gallery

An image gallery application demonstrating `@files-ui/react` v2.0 with Next.js 16 App Router, Server Components, and Server Actions.

## Features

- **Gallery** - Server-side rendered photo grid with `FileMosaic`
- **Upload** - Dropzone with Server Actions (no backend API needed!)
- **Headless Upload** - Custom UI with `useFilesUI` hook + Server Actions
- **Profile** - Avatar upload with Server Actions
- **Full-Screen Viewer** - Click photos to view in full screen with navigation
- **Loading States** - Skeleton components in `loading.tsx` files
- **RSC Integration** - Client subpath imports for Next.js 16 App Router

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** React 19
- **Styling:** Tailwind CSS 4
- **UI Library:** @files-ui/react v2.0.0 (local link)

## Prerequisites

- Node.js 20+
- npm or yarn

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Features Demonstrated

### v2.0 New Features
- ✅ Server Actions integration (`action` prop)
- ✅ RSC client subpath imports (`@files-ui/react/client/*`)
- ✅ `useFilesUI` headless hook with Server Actions
- ✅ `fontFamily` config in FilesUiProvider
- ✅ Skeleton components in Next.js streaming SSR

### Core Features
- ✅ `<Dropzone>` with Server Actions
- ✅ `<FileMosaic>` in gallery grid
- ✅ `<Avatar>` for profile picture
- ✅ `<FullScreen>` image viewer
- ✅ File validation (accept, maxFileSize, maxFiles)
- ✅ Upload progress tracking
- ✅ Delete files
- ✅ Server-side rendering (RSC)

## Project Structure

```
nextjs-gallery/
├── app/
│   ├── layout.tsx              # Root layout with FilesUiProvider
│   ├── page.tsx                # Gallery (Server Component)
│   ├── loading.tsx             # Loading skeleton
│   ├── upload/
│   │   ├── page.tsx            # Upload with Dropzone + action
│   │   └── headless/
│   │       └── page.tsx        # useFilesUI + action
│   ├── profile/
│   │   └── page.tsx            # Avatar upload
│   ├── actions/
│   │   ├── upload.ts           # Server Actions
│   │   └── photos.ts           # Photo queries
│   ├── components/
│   │   └── GalleryGrid.tsx     # Client photo grid
│   └── lib/
│       └── db.ts               # Simple JSON "database"
├── public/
│   └── uploads/                # Uploaded files
└── data/
    └── photos.json             # Photo metadata
```

## Key Files

- **Server Actions:** `app/actions/upload.ts` - handles file uploads server-side
- **RSC Page:** `app/page.tsx` - Server Component that reads photos on the server
- **Client Grid:** `app/components/GalleryGrid.tsx` - Interactive photo grid with delete and full-screen
- **Database:** `app/lib/db.ts` - Simple JSON file storage (replace with real DB in production)

## Client Subpath Imports

All interactive components use client subpath imports to work with Next.js App Router:

```tsx
import { Dropzone } from '@files-ui/react/client/dropzone';
import { FileMosaic } from '@files-ui/react/client/file-mosaic';
import { Avatar } from '@files-ui/react/client/avatar';
import { FullScreen } from '@files-ui/react/client/full-screen';
```

This prevents "use client" issues when importing in Server Components.
