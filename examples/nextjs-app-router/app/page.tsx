import Link from "next/link";
import { Dropzone } from "@files-ui/react";

/**
 * Server Component page that renders a client Dropzone.
 * No "use client" needed here — the Dropzone component has
 * "use client" baked into its build output, so Next.js
 * automatically creates a client boundary.
 */
export default function HomePage() {
  return (
    <main>
      <h1>Files UI + Next.js 16 (App Router)</h1>
      <p>
        This page is a Server Component that directly renders a client Dropzone.
      </p>
      <Dropzone accept="image/*,.pdf" maxFiles={2} label="Drop files here" />
      <p style={{ marginTop: 16 }}>
        Continue to <Link href="/upload">/upload</Link> for the Server Action + useFilesUI demo.
      </p>
    </main>
  );
}
