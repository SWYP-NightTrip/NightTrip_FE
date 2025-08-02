'use client';

import { useRouter } from 'next/navigation';

import PhotoCard from '@/components/common/PhotoCard';

import StarIcon from '@/icons/star.svg';
import { FALLBACK_CARD_IMAGE_URL } from '@/utils/constant/url';

interface TripCardProps {
  tripSpot: {
    id: number;
    imgUrl: string;
    name: string;
    stars: string;
    reviewCount: number;
    location: string;
  };
}

export default function TripCard({ tripSpot }: TripCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${tripSpot.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="relative w-[150px] h-[140px]">
        <PhotoCard.Photo
          src={tripSpot.imgUrl || FALLBACK_CARD_IMAGE_URL}
          alt={`${tripSpot.name} 이미지`}
          width={150}
          height={140}
          className="rounded-t-xl"
        />
      </div>

      <PhotoCard.Content className="mt-2.5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-nt-neutral-black leading-6 max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
            {tripSpot.name}
          </h3>
          <div className="flex items-center mb-1">
            <StarIcon />
            <span className="text-xs text-nt-neutral-400 leading-4 tracking-[0.06px]">
              {tripSpot.stars} ({tripSpot.reviewCount})
            </span>
          </div>
        </div>
        <p className="text-sm leading-5 text-nt-neutral-400 tracking-[0.014px]">
          {tripSpot.location}
        </p>
      </PhotoCard.Content>
    </div>
  );
}
