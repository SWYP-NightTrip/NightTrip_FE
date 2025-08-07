'use client';

import { useInfiniteMoreNightRecommend } from '@/components/pages/LoadMorePage/entities';
import Header from '@/components/pages/LoadMorePage/ui/Header';
import TripCard from '@/components/pages/MainPage/ui/TripCard';
import { useSearchParams } from 'next/navigation';

export default function LoadMorePageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? '';

  const { data } = useInfiniteMoreNightRecommend(type);

  const allContent = data?.pages.flatMap(page => page.data.content) ?? [];

  return (
    <div>
      <Header title={type} />

      <div className="grid grid-cols-2">
        {allContent.map(content => (
          <div key={content.id} className="w-full h-[218px] flex items-center justify-center">
            <TripCard tripSpot={content} />
          </div>
        ))}
      </div>
    </div>
  );
}
