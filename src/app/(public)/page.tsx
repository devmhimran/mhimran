// app/page.jsx
import { client } from '@/sanity/lib/client';
import { Hero, Portfolio } from '../components';
import PortfolioCard from '../components/portfolio-card/portfolio-card';
import { PortfolioCardProps } from '../types/global-types';

async function fetchPortfolioData(): Promise<PortfolioCardProps[]> {
  const query = `
    *[_type == "portfolio"]| order(_createdAt desc) [0...6] {
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

export default async function Home() {
  const portfolioData = await fetchPortfolioData();

  return (
    <>
      <Hero />
      <Portfolio portfolioData={portfolioData} />
    </>
  );
}
