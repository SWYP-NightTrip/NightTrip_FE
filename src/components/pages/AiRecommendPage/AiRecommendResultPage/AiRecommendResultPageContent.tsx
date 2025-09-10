'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface RecommendItem {
  id: number;
  rank: number;
  reason: string;
  spotName: string;
  address: string;
  category: string;
  starAvg: number;
  reviewCount: number;
  imageUrl: string | null;
}

export default function AiRecommendResultPageContent() {
  const [result, setResult] = useState<RecommendItem[]>([]);

  useEffect(() => {
    const data = sessionStorage.getItem('recommendResults');

    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  if (!result.length) return <div>로딩중...</div>;

  return (
    <div>
      {result.map(item => (
        <div key={item.id} className="mb-6 p-4 border rounded">
          <div>순위: {item.rank}</div>
          <div>이름: {item.spotName}</div>
          <div>이유: {item.reason}</div>
          <div>주소: {item.address}</div>
          <div>카테고리: {item.category}</div>
          <div>평점: {item.starAvg}</div>
          <div>리뷰수: {item.reviewCount}</div>
          {item.imageUrl && <Image src={item.imageUrl} alt={item.spotName} width={500} height={300} />}
        </div>
      ))}
    </div>
  );
}
