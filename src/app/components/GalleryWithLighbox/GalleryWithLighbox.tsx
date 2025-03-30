'use client';

import Image from 'next/image';
import { useState } from 'react';
import LightBox from '../LightBox/light-box';

interface ImageAsset {
  _id: string;
  url: string;
}

interface PortfolioImage {
  asset: ImageAsset;
  caption?: string;
}

interface GalleryProps {
  images: PortfolioImage[];
  title: string;
}

export default function GalleryWithLightbox({ images, title }: GalleryProps) {
  const lightBoxImages = images.map((img) => {
    return {
      src: img.asset.url,
      alt: `product-image-${img.asset._id}`,
      loading: 'lazy',
    };
  });
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {images.map((image, index) => (
          <div
            key={index}
            className='space-y-2 cursor-pointer'
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              src={image.asset.url}
              alt={image.caption || `${title} image ${index + 1}`}
              width={400}
              height={300}
              loading='lazy'
              placeholder='blur'
              blurDataURL='/assets/svg/placeholder.svg'
              className='object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow'
              onError={() =>
                console.error(`Failed to load thumbnail: ${image.asset.url}`)
              }
            />
          </div>
        ))}
        <LightBox
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          images={lightBoxImages}
          currentImageIndex={photoIndex}
          setCurrentImageIndex={setPhotoIndex}
        />
      </div>
    </>
  );
}
