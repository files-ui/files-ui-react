# @files-ui/react Examples

This directory contains complete, production-ready sample applications demonstrating the full feature set of `@files-ui/react` v2.0.

## Projects

### 1. [vite-file-manager](./vite-file-manager/)
**Vite + React 19 + Express Backend**

A document management dashboard showcasing:
- Standard Dropzone upload with validation
- Concurrent uploads (3 simultaneous)
- Chunked upload for large files (100MB+)
- Browse with grid/list toggle
- Size variants (xs/small/medium/large)
- Headless custom UI with `useFilesUI` hook
- Global font family and dark mode settings
- Express server with upload/download/delete endpoints

**Stack:** Vite 6, React 19, TypeScript, Express 5, multer

[View Documentation →](./vite-file-manager/README.md)

---

### 2. [nextjs-gallery](./nextjs-gallery/)
**Next.js 16 App Router + Server Actions**

An image gallery application demonstrating:
- Server-side rendering with React Server Components
- Upload via Next.js Server Actions (no XHR!)
- RSC client subpath imports
- Headless upload with `useFilesUI` + Server Actions
- Avatar upload component
- Full-screen image viewer
- Loading states with skeleton components
- Global font configuration

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4

[View Documentation →](./nextjs-gallery/README.md)

---

## Feature Coverage Matrix

| Feature | Vite Project | Next.js Project |
|---------|:---:|:---:|
| **Components** |
| `<Dropzone>` | ✅ | ✅ |
| `<FileMosaic>` | ✅ | ✅ |
| `<FileCard>` | ✅ | — |
| `<Avatar>` | — | ✅ |
| `<FullScreen>` | — | ✅ |
| **v2.0 Features** |
| `useFilesUI` headless | ✅ | ✅ |
| Server Actions (`action` prop) | — | ✅ |
| RSC client subpaths | — | ✅ |
| Size `variant` prop | ✅ | — |
| `fontFamily` config | ✅ | ✅ |
| Skeleton components | ✅ | ✅ |
| **Upload Strategies** |
| Standard XHR | ✅ | — |
| Concurrent upload | ✅ | — |
| Chunked upload | ✅ | — |
| Server Actions | — | ✅ |
| **Backend** |
| Express + multer | ✅ | — |
| Next.js Server Actions | — | ✅ |

---

## Quick Start

### Vite File Manager

```bash
cd vite-file-manager
npm install
npm run dev
```

Runs frontend on http://localhost:3000 and backend on http://localhost:3001

### Next.js Gallery

```bash
cd nextjs-gallery
npm install
npm run dev
```

Runs on http://localhost:3000

---

## Common Setup

Both projects use `@files-ui/react` via local link. Before running either project:

1. Build the library:
   ```bash
   cd ../../
   npm run build
   ```

2. Install example dependencies:
   ```bash
   cd examples/vite-file-manager  # or nextjs-gallery
   npm install
   ```

---

## Learning Path

1. **Start with Vite Project** - Demonstrates core upload functionality and all component variants
2. **Move to Next.js Project** - Shows RSC integration, Server Actions, and advanced Next.js patterns
3. **Compare Headless Pages** - See how the same `useFilesUI` hook works with different backends

---

## Production Notes

These examples use simplified "databases" for demonstration:
- **Vite:** In-memory object (resets on server restart)
- **Next.js:** JSON file in `data/photos.json`

For production:
- Replace with real databases (PostgreSQL, MongoDB, etc.)
- Add authentication
- Implement proper error handling
- Add file validation on server
- Use cloud storage (S3, Azure Blob, etc.) instead of local disk

---

## Issues or Questions?

- [Report Issues](https://github.com/files-ui/files-ui-react/issues)
- [View Documentation](https://files-ui.com)
