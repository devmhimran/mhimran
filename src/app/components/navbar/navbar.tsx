import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='py-10 flex justify-between items-center max-w-full lg:max-w-[70%] px-4 lg:px-0 mx-auto'>
      <Link href='/'>
        <Image
          src='/assets/img/dev-mh-imran-site-logo.png'
          alt='devmhimran'
          width={150}
          height={30}
          className='w-[100px] lg:w-[150px]'
        />
      </Link>
      <div className='flex items-center gap-6 font-semibold text-custom-primary'>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </header>
  );
}
