import type { Metadata } from 'next';
import {
  Afacad,
  Inter,
  Montserrat,
  Mulish,
  Nunito,
  Open_Sans,
  Quicksand,
} from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

import { cn } from './lib/utils';
import DefaultProvider from './providers/default-provider';

const inter = Montserrat({ subsets: ['latin'] });

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(SaansFont.className, 'bg-[#F8FAFC] max-w-5xl mx-auto')}
      >
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
