'use client';

import Badge from '@/components/common/Badge';
import { useInfiniteLikeLists } from '@/components/pages/LikesPage/entities';
import Header from '@/components/pages/LikesPage/ui/Header';
import LikesTripCard from '@/components/pages/LikesPage/ui/LikesTripCard';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function LikesPageContent() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteLikeLists();

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
    <div className="flex flex-col min-h-full px-4">
      <Header />
      <div className="flex flex-col">
        {allContent.length > 0 ? (
          <>
            <div className="flex items-center h-[62px]">
              <Badge className="bg-nt-neutral-400 border-0 text-nt-neutral-white">전체</Badge>
            </div>
            {allContent.map((content, i) => (
              <LikesTripCard key={content.spotId ?? i} tripSpot={content} />
            ))}
            <div ref={observerRef} className="h-0.5" />
            {isFetchingNextPage && <div className="text-center py-4 min-h-10">loading...</div>}
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-124px)]">
            <div className="flex flex-col items-center justify-center gap-2.5">
              <Image
                src="/images/error/sad_rabbit.png"
                width={120}
                height={130}
                alt="default image"
              />
              <p>아직 좋아요 한 장소가 없어요.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
