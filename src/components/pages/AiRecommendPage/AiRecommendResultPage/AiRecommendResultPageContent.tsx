'use client';

import Header from '@/components/pages/AiRecommendPage/ui/Header';
import TripCard from '@/components/pages/AiRecommendPage/AiRecommendResultPage/ui/TripCard';
import { useEffect, useState } from 'react';

interface RecommendItem {
  id: number;
  rank: number;
  reason: string;
  spotName: string;
  address: string;
  category: string;
  starAvg: string;
  reviewCount: number;
  imageUrl: string;
}

export default function AiRecommendResultPageContent() {
  const [result, setResult] = useState<RecommendItem[] | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('recommendResults');

    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  if (result === null) return <div>Loading...</div>;
  if (result.length === 0) return <div>결과가 없습니다.</div>;

  return (
    <div>
      <Header title='AI 추천' />
      <div className="flex flex-wrap justify-between p-3 gap-y-6">
        {result.map((res, idx) => (
          <div key={res.id ?? idx} className="w-[162px] h-[218px]">
            <TripCard tripSpot={res} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
