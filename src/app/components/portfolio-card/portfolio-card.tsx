// components/PortfolioCard.jsx
import { PortfolioCardProps } from '@/app/types/global-types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const PortfolioCard = ({
  title,
  description,
  thumbnailUrl,
  thumbnailAlt,
  live_link,
}: PortfolioCardProps) => {
  return (
    <div className='bg-[#F1F5F9] p-3 lg:p-6 rounded-xl'>
      {thumbnailUrl && (
        <Image
          className='w-full rounded-lg'
          src={thumbnailUrl}
          alt={thumbnailAlt || 'Portfolio thumbnail'}
          width={350}
          height={200}
        />
      )}
      <div className='space-y-2 mt-2'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <div>
          <div>
            {Array.isArray(description) ? (
              <PortableText value={description} />
            ) : (
              <p className='text-custom-secondary'>
                {description || 'No description available'}
              </p>
            )}
          </div>
        </div>
        {/* {live_link && (
          <a
            href={live_link}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#48bb78',
              color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Visit Live Site
          </a>
        )} */}
      </div>
    </div>
  );
};

export default PortfolioCard;
