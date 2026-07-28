import { FilesUiProvider } from '@files-ui/react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Files UI Gallery',
  description: 'Image gallery with Files UI v2.0 and Next.js 16 App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilesUiProvider config={{ fontFamily: 'Inter' }}>
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex space-x-8 items-center">
                  <a href="/" className="text-xl font-bold text-blue-600">
                    Gallery
                  </a>
                  <a href="/upload" className="text-gray-700 hover:text-blue-600">
                    Upload
                  </a>
                  <a href="/upload/headless" className="text-gray-700 hover:text-blue-600">
                    Headless Upload
                  </a>
                  <a href="/profile" className="text-gray-700 hover:text-blue-600">
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </FilesUiProvider>
      </body>
    </html>
  );
}
