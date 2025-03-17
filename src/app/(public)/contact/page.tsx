import ContactPage from '@/app/components/contact-page/contact-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Devmhimran',
  description: 'Get in touch with Mahmud Hasan Imran',
  robots: {
    follow: true,
    index: true,
  },
};

export default function Contact() {
  return <ContactPage />;
}
