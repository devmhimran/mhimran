import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { cn } from './lib/utils';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Devmhimran -  Software Developer',
  description:
    'Mahmud Hasan Imran is a software developer specializing in Next.js, React, and Express.js',
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
    title: 'Devmhimran - Software Developer',
    description:
      'Mahmud Hasan Imran is a software developer specializing in Next.js, React, and Express.js',
  },
  openGraph: {
    type: 'website',
    title: 'Devmhimran -  Software Developer',
    description:
      'Mahmud Hasan Imran is a software developer specializing in Next.js, React, and Express.js',
    images: [
      {
        url: '/og.jpg',
        width: 1280,
        height: 769,
        alt: 'Devmhimran - Software Developer',
      },
    ],
    siteName: 'Devmhimran - Software Developer',
  },
  metadataBase: new URL('https://www.devmhimran.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahmud Hasan Imran',
  image: 'https://www.devmhimran.com/demhimran-avatar.webp',
  url: 'https://www.devmhimran.com',
  jobTitle: 'Product Engineer',
  sameAs: [
    'https://www.facebook.com/devmhimran01',
    'https://github.com/devmhimran',
    'https://www.linkedin.com/in/devmhimran',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}
        />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}
        />
      </head>
      <body
        className={cn(SaansFont.className, 'bg-[#F8FAFC] max-w-5xl mx-auto')}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
