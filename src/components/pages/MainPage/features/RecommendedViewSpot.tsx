import { recommendedSpots } from '@/components/pages/MainPage/entities/recommend/mock';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import TripCard from '@/components/pages/MainPage/ui/TripCard';

export default function RecommendedViewSpot() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="flex gap-[14px] -ml-0">
        {recommendedSpots.map(spot => (
          <CarouselItem key={spot.id} className="basis-auto p-0">
            <TripCard tripSpot={spot} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
