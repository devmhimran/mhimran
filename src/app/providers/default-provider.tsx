import { Toaster } from 'sonner';
import { Navbar } from '../components';

export default function DefaultProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Toaster position='top-center' />
    </>
  );
}
