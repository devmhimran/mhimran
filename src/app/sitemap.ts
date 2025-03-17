import { MetadataRoute } from 'next';
import { PortfolioCardProps } from './types/global-types';
import { client } from '@/sanity/lib/client';

export const revalidate = 30;

async function fetchPortfolioData(): Promise<PortfolioCardProps[]> {
  const query = `
   *[_type == "portfolio"]| order(_createdAt desc) {
        title,
        live_link,
        description,
        "imageUrls": images[].asset->url,
        "thumbnailUrl": thumbnail.asset->url,
        "thumbnailAlt": thumbnail.alt
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
