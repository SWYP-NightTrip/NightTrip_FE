import TripCard from '@/components/pages/MainPage/ui/TripCard';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

// import { useGetNightPopularCategory } from '@/components/pages/MainPage/category/entities';
import { recommendedSpots } from '@/components/pages/MainPage/mock';

export default function NightPopularCategory() {
  // const { data: recommendedSpots } = useGetNightPopularCategory();

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="flex gap-[12px] -ml-0">
        {recommendedSpots.map(spot => (
          <CarouselItem key={spot.id} className="basis-auto p-0">
            <TripCard tripSpot={spot} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
