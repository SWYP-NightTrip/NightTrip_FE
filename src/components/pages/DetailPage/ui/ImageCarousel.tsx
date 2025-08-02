'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import type { CarouselApi } from '@/lib/shadcn/components/ui/carousel';

interface ImageCarouselProps {
  images: string[];
  spotName: string;
}

export default function ImageCarousel({ images, spotName }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => () => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative py-5 px-4">
      {/* 이미지 캐러셀 */}
      <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  className="object-cover"
                  alt={`${spotName} 이미지 ${index + 1}`}
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* 인덱스 버튼만 */}
        <div className="absolute bottom-5 left-0 right-0">
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === current
                      ? 'bg-[#7672DA] w-4 h-2.5' // 현재 이미지는 긴 직사각형
                      : 'bg-gray-300 hover:bg-gray-400' // 나머지는 원형
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Carousel>
    </div>
  );
}
