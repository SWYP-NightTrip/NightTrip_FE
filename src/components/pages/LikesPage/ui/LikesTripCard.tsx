'use client';

import { useRouter } from 'next/navigation';

import PhotoCard from '@/components/common/PhotoCard';

import { FALLBACK_CARD_IMAGE_URL } from '@/utils/constant/url';

interface LikesTripCardProps {
  tripSpot: {
    spotId: number;
    spotName: string;
    address: string;
    category: string;
    imageUrl: string | null;
  };
}

export default function LikesTripCard({ tripSpot }: LikesTripCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${tripSpot.spotId}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer flex px-4 py-4.5">
      <div className="relative h-[74px] flex items-center gap-4">
        <div className="w-[74px] h-[74px]">
          <PhotoCard.Photo
            src={tripSpot.imageUrl || FALLBACK_CARD_IMAGE_URL}
            alt={`${tripSpot.spotName} 이미지`}
            width={74}
            height={74}
            className="rounded-t-xl"
          />
        </div>

        <PhotoCard.Content className='flex flex-col gap-0.5'>
          <div className="flex justify-between">
            <h3 className="font-semibold text-nt-neutral-black leading-6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              {tripSpot.spotName}
            </h3>
          </div>
          <p className='body2 text-nt-neutral-400'>
            {tripSpot.category}
          </p>
          <p className="text-sm leading-5 text-nt-neutral-400 tracking-[0.014px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
            {tripSpot.address}
          </p>
        </PhotoCard.Content>
      </div>
    </div>
  );
}
