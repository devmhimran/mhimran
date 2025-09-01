'use client';

import { Toaster } from 'sonner';
import { Footer, Navbar } from '../components';
import HeadingTicker from '../components/heading-ticker/HeadingTicker';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function DefaultProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeadingTicker />
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
      <Toaster position='top-center' />
    </>
  );
}
