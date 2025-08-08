import Link from 'next/link';

import TripCard from '@/components/pages/MainPage/ui/TripCard';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import { useGetNightRecommendCategory } from '@/components/pages/MainPage/category/entities';

export default function NightRecommendCategory() {
  const { data: recommendedSpots } = useGetNightRecommendCategory();

  return (
    <>
      <div className="px-4 h-[42px] flex items-center justify-between">
        <h3 className="font-semibold text-nt-neutral-black leading-6">
          {recommendedSpots.data.category}
        </h3>
        {recommendedSpots.data.isMore && (
          <Link
            className="text-sm text-[#5B58C2] active:bg-nt-primary-50 p-1 rounded-nt-radius"
            href={`/recommend/loadmore/category/all?type=${recommendedSpots.data.category}`}
          >
            더보기
          </Link>
        )}
      </div>
      <div className="pl-4 pt-1.5 pb-2.5">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-[12px] -ml-0">
            {recommendedSpots.data.spots?.map(spot => (
              <CarouselItem key={spot.id} className="basis-auto p-0">
                <TripCard tripSpot={spot} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
