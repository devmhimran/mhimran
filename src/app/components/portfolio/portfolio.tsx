import { PortfolioCardProps } from '@/app/types/global-types';
import PortfolioCard from '../portfolio-card/portfolio-card';

type portfolioProps = {
  portfolioData: PortfolioCardProps[];
};

export default function Portfolio({ portfolioData }: portfolioProps) {
  return portfolioData.length > 0 ? (
    <section className='lg:px-0 px-2'>
      <div className='max-w-full lg:max-w-[70%] mx-auto my-8 lg:my-12 space-y-3'>
        <h4 className='text-2xl font-semibold'>Personal Projects</h4>
        <p className='text-lg text-custom-tertiary'>
          Showcasing My Work & Ideas
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description ?? 'No description available'}
            thumbnailUrl={item.thumbnailUrl}
            thumbnailAlt={item.thumbnailAlt}
            live_link={item.live_link}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  ) : (
    <p className='max-w-full lg:max-w-[70%] mx-auto my-8 lg:my-12'>
      No portfolio items found.
    </p>
  );
}
