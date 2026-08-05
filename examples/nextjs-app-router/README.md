# Next.js 16 App Router Example

This example validates `@files-ui/react` integration in Next.js App Router with:

- **Server Component rendering**: Import client components directly from `@files-ui/react` — the `"use client"` directive is baked into the build output, so Next.js automatically creates client boundaries.
- **Server Action upload flow**: Upload files using Next.js Server Actions instead of URL endpoints.
- **`useFilesUI` hook**: Full headless control in a client page.

## Key Patterns

### Server Component + Client Component (no "use client" needed in page)

```tsx
// app/page.tsx — this is a Server Component
import { Dropzone } from "@files-ui/react";

export default function HomePage() {
  return <Dropzone accept="image/*" maxFiles={2} />;
}
```

### Client page with hooks (still needs "use client")

```tsx
"use client";
import { useFilesUI, FileInputButton, FileMosaic } from "@files-ui/react";
```

> **Note**: The `/client/` subpath imports (e.g., `@files-ui/react/client/dropzone`) still work
> but are no longer required since v2.0.6.

## Structure

- `app/layout.tsx`
- `app/page.tsx`
- `app/actions.ts`
- `app/upload/page.tsx`
- `next.config.js`

## Prerequisites

- Node.js 20+
- Build artifacts for local package dependency

From the `react` package root:

```bash
npm run build
```

## Install

From this folder:

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Open http://localhost:3000

## Production build check

```bash
npm run build
```

This example uses `next build --webpack` to avoid a WASM Turbopack limitation that can occur in some local environments.

## Notes / caveats

- `outputFileTracingRoot` is configured in `next.config.js` for monorepo-style lockfile detection.
- You may still see informational `baseline-browser-mapping` freshness warnings from Next.js internals. They are non-blocking for build output.


## Validation status in this workspace

- `npm install`: passed
- `next build --webpack`: passed
