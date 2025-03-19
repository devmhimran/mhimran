import { Toaster } from 'sonner';
import { Footer, Navbar } from '../components';

export default function DefaultProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
      <Toaster position='top-center' />
    </>
  );
}
