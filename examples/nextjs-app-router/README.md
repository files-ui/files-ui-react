# Next.js 16 App Router Example

This example validates `@files-ui/react` integration in Next.js App Router with:

- Client subpath import: `@files-ui/react/client/dropzone`
- Server Action upload flow
- `useFilesUI` usage in a client page

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
