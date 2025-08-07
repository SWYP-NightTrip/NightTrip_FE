import TripCard from "@/components/pages/MainPage/ui/TripCard";
import { useGetRandomCategories } from "@/components/pages/RecommendPage/random-category/entities"
import { Carousel, CarouselContent, CarouselItem } from "@/lib/shadcn/components/ui/carousel";
import Link from "next/link";

export default function NightRandomRecommendCategory() {
  const { data } = useGetRandomCategories();
  const { data: randomCategoryData } = data;

  return (
    <>
      <div className="px-4 h-[42px] flex items-center justify-between">
        <h3 className="font-semibold text-nt-neutral-black leading-6">
          {randomCategoryData.category}
        </h3>
        <Link
          className="text-sm text-[#5B58C2] active:bg-nt-primary-50 p-1 rounded-nt-radius"
          href='#'
        >
          더보기
        </Link>
      </div>
      <div className="pl-4 pt-1.5 pb-2.5">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-[14px] -ml-0">
            {randomCategoryData.spots.map(spot => (
              <CarouselItem key={spot.id} className="basis-auto p-0">
                <TripCard tripSpot={spot} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
