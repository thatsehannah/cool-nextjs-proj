import React, { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cool Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: ['Next.js', 'TypeScript', 'TailwindCSS'],
};

// const incosolata = Inconsolata({
//   subsets: ['latin'],
// });

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400'],
// });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
