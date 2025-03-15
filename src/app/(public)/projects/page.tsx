import { Portfolio } from '@/app/components';
import { PortfolioCardProps } from '@/app/types/global-types';
import { client } from '@/sanity/lib/client';

async function fetchPortfolioData(): Promise<PortfolioCardProps[]> {
  const query = `
    *[_type == "portfolio"]| order(_createdAt desc)  {
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

export default async function Projects() {
  const portfolioData = await fetchPortfolioData();
  return <Portfolio portfolioData={portfolioData} />;
}
