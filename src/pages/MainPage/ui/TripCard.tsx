import PhotoCard from '@/components/common/PhotoCard';

import StarIcon from '@/icons/star.svg';

interface TripCardProps {
  tripSpot: {
    imgUrl: string;
    name: string;
    stars: string;
    reviewCount: number;
    location: string;
    price: string;
  };
}

export default function TripCard({ tripSpot }: TripCardProps) {
  return (
    <>
      <div className="relative">
        <PhotoCard.Photo
          src={tripSpot.imgUrl}
          alt={`${tripSpot.name} 이미지`}
          width={150}
          height={140}
          className="rounded-t-xl"
        />
      </div>

      <PhotoCard.Content className="mt-2.5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-nt-neutral-black leading-6">{tripSpot.name}</h3>
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
        <p className="text-sm font-medium text-nt-neutral-black mt-1 leading-[22px]">
          {tripSpot.price}
        </p>
      </PhotoCard.Content>
    </>
  );
}
