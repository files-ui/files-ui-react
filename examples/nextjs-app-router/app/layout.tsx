import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Files UI Next.js App Router Example",
  description: "Next.js 16 App Router integration for @files-ui/react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
