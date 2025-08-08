import Link from 'next/link';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import TripCard from '@/components/pages/MainPage/ui/TripCard';
import { useGetNightPopularSpot } from '@/components/pages/MainPage/popular/entities';

export default function NightPopularSpot() {
  const { data: nightPopularSpots } = useGetNightPopularSpot();

  return (
    <>
      <div className="px-4 h-[42px] flex items-center justify-between">
        <h3 className="font-semibold text-nt-neutral-black leading-6">인기 많은 여행지</h3>
        {nightPopularSpots.data.isMore && (
          <Link
            className="text-sm text-[#5B58C2] active:bg-nt-primary-50 p-1 rounded-nt-radius"
            href={`/recommend/loadmore/popular`}
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
          <CarouselContent className="flex gap-[14px] -ml-0">
            {nightPopularSpots.data.spots?.map(spot => (
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
