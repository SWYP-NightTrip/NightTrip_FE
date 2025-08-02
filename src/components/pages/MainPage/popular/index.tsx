import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import TripCard from '@/components/pages/MainPage/ui/TripCard';

import { useGetNightPopularSpot } from '@/components/pages/MainPage/popular/entities';

export default function NightPopularSpot() {
  const { data: nightPopularSpots } = useGetNightPopularSpot();

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="flex gap-[14px] -ml-0">
        {nightPopularSpots.data.map(spot => (
          <CarouselItem key={spot.id} className="basis-auto p-0">
            <TripCard tripSpot={spot} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
