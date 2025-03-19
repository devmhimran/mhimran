import { MetadataRoute } from 'next';
import { PortfolioCardProps } from './types/global-types';
import { client } from '@/sanity/lib/client';

export const revalidate = 30;

async function fetchPortfolioData(): Promise<PortfolioCardProps[]> {
  const query = `
   *[_type == "portfolio"]| order(_createdAt desc) {
        slug,
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
  const projects = await fetchPortfolioData();

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectEntries,
  ];
}
