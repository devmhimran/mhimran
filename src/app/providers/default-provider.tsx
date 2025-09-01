import { Toaster } from 'sonner';
import { Footer, Navbar } from '../components';
import HeadingTicker from '../components/heading-ticker/HeadingTicker';

export default function DefaultProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
