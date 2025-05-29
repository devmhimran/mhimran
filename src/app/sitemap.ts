import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

export const revalidate = 3600;

interface PortfolioItem {
  slug: string;
  _updatedAt: string;
}

async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  const query = `
    *[_type == "portfolio"] | order(_createdAt desc) {
      slug,
      _updatedAt
    }
  `;

  try {
    const data: PortfolioItem[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching portfolio data for sitemap:', {
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
    });
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.devmhimran.com';
  const currentDate = new Date();

  const portfolios = await fetchPortfolioData();

  const portfolioEntries: MetadataRoute.Sitemap = portfolios.map(
    (portfolio) => ({
      url: `${baseUrl}/portfolio/${portfolio.slug}`,
      lastModified: portfolio._updatedAt
        ? new Date(portfolio._updatedAt)
        : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  );

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...staticEntries, ...portfolioEntries];
}
