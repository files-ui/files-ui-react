import Link from "next/link";
import Dropzone from "@files-ui/react/client/dropzone";

export default function HomePage() {
  return (
    <main>
      <h1>Files UI + Next.js 16 (App Router)</h1>
      <p>
        This page renders a client-only Dropzone import from the App Router.
      </p>
      <Dropzone accept="image/*,.pdf" maxFiles={2} label="Drop files here" />
      <p style={{ marginTop: 16 }}>
        Continue to <Link href="/upload">/upload</Link> for the Server Action + useFilesUI demo.
      </p>
    </main>
  );
}
