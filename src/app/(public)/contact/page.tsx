import ContactPage from '@/app/components/contact-page/contact-page';
import { Metadata } from 'next';

export const metadata = {
  title: 'Contact | Devmhimran',
  description:
    'Get in touch with Mahmud Hasan Imran, a software developer specializing in Next.js, React, and Express.js.',
  keywords: [
    'Mahmud Hasan Imran contact',
    'Devmhimran contact',
    'software developer contact',
    'web developer contact',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Contact | Devmhimran',
    description: 'Contact Mahmud Hasan Imran for collaboration or inquiries.',
    url: 'https://www.devmhimran.com/contact',
    images: [
      {
        url: 'https://www.devmhimran.com/og.jpg',
        width: 1280,
        height: 769,
        alt: 'Devmhimran Contact Page',
      },
    ],
    siteName: 'Devmhimran - Software Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Devmhimran',
    description: 'Contact Mahmud Hasan Imran for collaboration or inquiries.',
    images: ['https://www.devmhimran.com/og.jpg'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact Mahmud Hasan Imran',
  url: 'https://www.devmhimran.com/contact',
  description:
    'Get in touch with Mahmud Hasan Imran, a software developer specializing in Next.js, React, and Express.js, for collaboration or inquiries.',
  isPartOf: {
    '@type': 'WebSite',
    url: 'https://www.devmhimran.com',
    name: 'Devmhimran - Software Developer',
  },
  position: 3,
  author: {
    '@type': 'Person',
    name: 'Mahmud Hasan Imran',
    url: 'https://www.devmhimran.com/about',
    sameAs: [
      'https://www.facebook.com/devmhimran01',
      'https://github.com/devmhimran',
      'https://www.linkedin.com/in/devmhimran',
    ],
  },
};

export default function Contact() {
  return (
    <>
      {contactJsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        />
      )}
      <ContactPage />
    </>
  );
}
