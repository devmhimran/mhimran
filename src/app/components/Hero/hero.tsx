import Link from 'next/link';
import Button from '../button/button';

export default function Hero() {
  return (
    <section className='max-w-full lg:max-w-[70%] mx-auto space-y-7 border-b py-14 lg:px-0 px-4'>
      <div>
        <h1 className='text-4xl font-semibold text-custom-navy'>
          Hello, I&apos;m Mahmud Hasan Imran
        </h1>
        <p className='text-2xl text-custom-secondary'>Software Developer</p>
      </div>
      <div className='text-xl text-custom-tertiary'>
        I&apos;m a software developer specializing in Next.js, React, and
        Express.js. I work with a Finland-based company, building innovative
        solutions. I have over three years of experience, including work on
        healthcare and job portal platforms.
      </div>
      <div>
        <Link href='/about'>
          <Button>More Information</Button>
        </Link>
      </div>
    </section>
  );
}
