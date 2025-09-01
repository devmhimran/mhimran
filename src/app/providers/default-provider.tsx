'use client';

import { Toaster } from 'sonner';
import { Footer, Navbar } from '../components';
import HeadingTicker from '../components/heading-ticker/HeadingTicker';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';

export default function DefaultProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Set up YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player(iframeRef.current, {
        events: {
          onReady: (event: any) => {
            event.target.setVolume(50); // Set volume to 50%
            event.target.playVideo();
          },
        },
      });
    };
  }, []);
  return (
    <>
      <iframe
        ref={iframeRef}
        src='https://www.youtube.com/embed/Krys1QG_W1U?si=THlj7IZUyClp-BZy&autoplay=1&loop=1&playlist=Krys1QG_W1U'
        style={{ display: 'none' }}
        allow='autoplay'
        title='Background Music'
      />
      <HeadingTicker />
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
      <Toaster position='top-center' />
    </>
  );
}
