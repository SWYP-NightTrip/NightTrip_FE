'use client';

import { useRouter } from 'next/navigation';

import PhotoCard from '@/components/common/PhotoCard';

import StarIcon from '@/icons/star.svg';
import { FALLBACK_CARD_IMAGE_URL } from '@/utils/constant/url';
import { cn } from '@/lib/shadcn/utils';

interface TripCardProps {
  tripSpot: {
    id: number;
    rank: number;
    reason: string;
    spotName: string;
    address: string;
    category: string;
    starAvg: string;
    reviewCount: number;
    imageUrl: string;
  };
  className?: string;
}

export default function TripCard({ tripSpot, className }: TripCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${tripSpot.id}?from=ai`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className={cn('relative w-[150px] h-[140px]', className)}>
        <PhotoCard.Photo
          src={tripSpot.imageUrl || FALLBACK_CARD_IMAGE_URL}
          alt={`${tripSpot.spotName} 이미지`}
          width={150}
          height={140}
          className="rounded-t-xl"
        />
      </div>

      <PhotoCard.Content className="mt-2.5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-nt-neutral-black leading-6 max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
            {tripSpot.spotName}
          </h3>
          <div className="flex items-center mb-1">
            <StarIcon />
            <span className="text-xs text-nt-neutral-400 leading-4 tracking-[0.06px]">
              {tripSpot.starAvg} ({tripSpot.reviewCount})
            </span>
          </div>
        </div>
        <p className="text-sm leading-5 text-nt-neutral-400 tracking-[0.014px] truncate">
          {tripSpot.category} · {tripSpot.address}
        </p>
        <p className="text-sm leading-5 text-nt-neutral-black tracking-[0.014px] truncate">
          {tripSpot.reason}
        </p>
      </PhotoCard.Content>
    </div>
  );
}
