import { MoveDown } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const date = new Date();

  return (
    <footer className='max-w-full lg:max-w-[70%] mx-auto border-t py-8 lg:px-0 px-4 mt-14 flex justify-between items-center'>
      <div className='text-sm text-custom-tertiary'>
        © 2019 - {date.getFullYear()} / devmhimran
      </div>
      <div>
        <Link
          className='text-sm text-custom-tertiary flex items-center justify-between gap-1'
          href='/mahmud-hasan-imran-resume.pdf'
        >
          <div>Download Resume</div>
          <div>
            <MoveDown className='w-3' />
          </div>
        </Link>
      </div>
    </footer>
  );
}
