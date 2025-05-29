import { Portfolio } from '@/app/components';
import { PortfolioCardProps } from '@/app/types/global-types';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Projects | Devmhimran',
  description:
    'Explore the projects of Mahmud Hasan Imran, showcasing expertise in Next.js, React, and Express.js.',
  keywords: [
    'Mahmud Hasan Imran projects',
    'Devmhimran projects',
    'software developer portfolio',
    'web development projects',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Projects | Devmhimran',
    description:
      'View the portfolio of Mahmud Hasan Imran’s web development projects.',
    url: 'https://www.devmhimran.com/projects',
    images: [
      {
        url: 'https://www.devmhimran.com/og.jpg',
        width: 1280,
        height: 769,
        alt: 'Devmhimran Projects Page',
      },
    ],
    siteName: 'Devmhimran - Software Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Devmhimran',
    description:
      'View the portfolio of Mahmud Hasan Imran’s web development projects.',
    images: ['https://www.devmhimran.com/og-projects.jpg'],
  },
};

const projectJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Projects by Mahmud Hasan Imran',
  url: 'https://www.devmhimran.com/projects',
  description:
    'Explore the projects of Mahmud Hasan Imran, showcasing expertise in Next.js, React, and Express.js.',
  isPartOf: {
    '@type': 'WebSite',
    url: 'https://www.devmhimran.com',
    name: 'Devmhimran - Software Developer',
  },
};

export const revalidate = 3600;

async function fetchPortfolioData(): Promise<PortfolioCardProps[]> {
  const query = `
   *[_type == "portfolio"]| order(_createdAt desc) {
        title,
        live_link,
        description,
        "imageUrls": images[].asset->url,
        "thumbnailUrl": thumbnail.asset->url,
        "thumbnailAlt": thumbnail.alt,
        slug
      }
  `;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return [];
  }
}

export default async function Projects() {
  const portfolioData = await fetchPortfolioData();
  return (
    <>
      {projectJsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      )}
      <Portfolio portfolioData={portfolioData} />
    </>
  );
}
