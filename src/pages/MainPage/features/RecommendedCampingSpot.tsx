import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';
import { recommendedSpots } from '@/pages/MainPage/entities/recommend/mock';

import TripCard from '@/pages/MainPage/ui/TripCard';

export default function RecommendedCampingSpot() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="flex gap-[14px]">
        {recommendedSpots.map(spot => (
          <CarouselItem key={spot.id} className="basis-auto">
            <TripCard tripSpot={spot} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
