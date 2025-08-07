'use client';

import { useInfiniteMoreNightRecommend } from '@/components/pages/LoadMorePage/entities';
import Header from '@/components/pages/LoadMorePage/ui/Header';
import TripCard from '@/components/pages/LoadMorePage/ui/TripCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function LoadMorePageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? '';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteMoreNightRecommend(type);

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    const observer = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allContent = data?.pages.flatMap(page => page.data.content) ?? [];

  return (
    <div>
      <Header title={type} />
      <div className="flex flex-wrap justify-between p-3">
        {allContent.map((content, idx) => (
          <div key={content.id ?? idx} className="w-[162px] h-[218px]">
            <TripCard tripSpot={content} className="w-full" />
          </div>
        ))}
      </div>
      <div ref={observerRef} className="h-0.5" />
      {isFetchingNextPage && <div className="text-center py-4 min-h-10">loading...</div>}
    </div>
  );
}
