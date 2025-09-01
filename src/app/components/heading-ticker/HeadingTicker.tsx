'use client';

import { useState, useEffect } from 'react';
import Ticker from 'react-ticker';

export default function HeadingTicker() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <div className='overflow-hidden'>
      <Ticker offset='run-in' move={true} mode='chain' speed={6}>
        {() => (
          <div className='flex items-center gap-8 py-1 px-2 bg-orange-400'>
            <span className='text-base whitespace-nowrap'>
              🚀 Open to new opportunities! Looking to contribute to innovative
              projects with Next.js, React, and TypeScript
            </span>
            <span className='text-base whitespace-nowrap'>
              💼 Interested in collaborating? Let&apos;s build something amazing
              together
            </span>
            <span className='text-base whitespace-nowrap'>
              📧 Feel free to reach out for full-time positions or freelance
              projects
            </span>
          </div>
        )}
      </Ticker>
    </div>
  );
}
