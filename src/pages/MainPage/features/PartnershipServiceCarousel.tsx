import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/lib/shadcn/components/ui/carousel';

import Button from '@/components/common/Button';

import { partnershipServiceCategories } from '@/pages/MainPage/entities/partnership/mock';

export default function PartnershipServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full "
    >
      <CarouselContent className="flex gap-[14px]">
        {partnershipServiceCategories.map(category => (
          <CarouselItem key={category.id} className="basis-auto w-[70px]">
            <div className="flex flex-col items-center gap-[6px]">
              <Button className="w-[50px] h-[50px] rounded-full bg-nt-primary-50">
                <Image src={category.icon} alt="아이콘" width={40} height={40} />
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
