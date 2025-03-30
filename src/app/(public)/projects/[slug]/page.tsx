import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

import { Metadata } from 'next';
import { GalleryWithLightbox, PortableTextComponent } from '@/app/components';

interface ImageAsset {
  _id: string;
  url: string;
}

interface PortfolioImage {
  asset: ImageAsset;
  caption?: string;
}

interface PortfolioThumbnail {
  asset: ImageAsset;
  alt?: string;
}

interface Portfolio {
  title: string;
  slug: string;
  live_link?: string;
  description?: any;
  images?: PortfolioImage[];
  thumbnail?: PortfolioThumbnail;
}

interface Params {
  slug: string;
}

export const revalidate = 3600;

const query = `*[_type == "portfolio" && slug == $slug][0] {
  title,
  slug,
  live_link,
  description,
  "images": images[] {
    asset-> {
      _id,
      url
    },
    caption
  },
  "thumbnail": thumbnail {
    asset-> {
      _id,
      url
    },
    alt
  }
}`;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = params;
  const portfolio = await fetchPortfolio(slug);

  if (!portfolio) {
    return {
      title: 'Portfolio Not Found',
      description: 'The requested portfolio could not be found.',
    };
  }

  return {
    title: `${portfolio.title} | Your Portfolio Site`,
    description: portfolio.description
      ? `${portfolio.description[0]?.children[0]?.text.slice(0, 150)}...`
      : `Explore ${portfolio.title}, a portfolio project.`,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description
        ? `${portfolio.description[0]?.children[0]?.text.slice(0, 150)}...`
        : `Explore ${portfolio.title}, a portfolio project.`,
      url: `/portfolio/${portfolio.slug}`,
      images: portfolio.thumbnail?.asset?.url
        ? [{ url: portfolio.thumbnail.asset.url, width: 800, height: 400 }]
        : [{ url: '/assets/svg/placeholder.svg', width: 350, height: 200 }],
    },
  };
}

async function fetchPortfolio(slug: string): Promise<Portfolio | null> {
  return await client.fetch(query, { slug });
}

export default async function PortfolioDetails({ params }: { params: Params }) {
  const { slug } = params;
  const portfolio = await fetchPortfolio(slug);

  if (!portfolio) {
    return (
      <div className='container mx-auto py-8'>
        <h1 className='text-2xl font-bold'>Portfolio not found</h1>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>
          {portfolio.title}
        </h1>
        {portfolio.live_link && (
          <Link
            href={portfolio.live_link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline text-lg'
          >
            <div className='flex items-center space-x-2'>
              <span>Visit Live Site</span>
              <span>
                <SquareArrowOutUpRight className='w-4' />
              </span>
            </div>
          </Link>
        )}
      </div>

      {portfolio.thumbnail && (
        <div className='mb-12'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Featured Image
          </h2>
          <div className='relative w-full'>
            {portfolio.thumbnail.asset?.url ? (
              <Image
                src={portfolio.thumbnail.asset.url}
                alt={portfolio.thumbnail.alt || `${portfolio.title} thumbnail`}
                width={800}
                height={400}
                className='w-full object-cover rounded-lg shadow-lg'
                priority
              />
            ) : (
              <Image
                className='w-full h-[270px] object-cover rounded-lg'
                src='/assets/svg/placeholder.svg'
                alt={portfolio.title || 'Portfolio thumbnail'}
                width={350}
                height={200}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/assets/svg/placeholder.svg'
              />
            )}
          </div>
        </div>
      )}

      {portfolio.description && (
        <div className='prose max-w-none mb-12'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Description
          </h2>
          <div className='text-custom-tertiary leading-1.5'>
            <PortableText
              value={portfolio.description}
              components={PortableTextComponent}
            />
          </div>
        </div>
      )}

      {portfolio.images && portfolio.images.length > 0 && (
        <div>
          <h2 className='text-xl font-semibold text-gray-700 mb-6'>Gallery</h2>
          <GalleryWithLightbox
            images={portfolio.images}
            title={portfolio.title}
          />
        </div>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';
