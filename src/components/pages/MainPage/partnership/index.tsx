import Image from 'next/image';
import Button from '@/components/common/Button';

import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';
import { useGetPartnership } from '@/components/pages/MainPage/partnership/entities';
import { FALLBACK_PARTNERSHIP_IMAGE_URL } from '@/utils/constant/url';

export default function NightTripPartnership() {
  const { data: partnership } = useGetPartnership();

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full "
    >
      <CarouselContent className="flex gap-[14px]">
        {partnership.data.map(category => (
          <CarouselItem key={category.id} className="basis-auto w-[70px]">
            <div className="flex flex-col items-center gap-[6px]">
              <Button className="w-[50px] h-[50px] rounded-full bg-nt-primary-50">
                <Image
                  src={category.imgUrl || FALLBACK_PARTNERSHIP_IMAGE_URL}
                  alt="아이콘"
                  width={40}
                  height={40}
                />
              </Button>
              <span className="text-nt-neutral-400 text-sm font-semibold leading-[22px]">
                {category.label}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
