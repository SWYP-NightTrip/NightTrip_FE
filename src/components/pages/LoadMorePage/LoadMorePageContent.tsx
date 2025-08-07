'use client';

import { useSearchParams } from 'next/navigation';

export default function LoadMorePageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  console.log(type);

  return <>{type ? <div>{type} 더보기</div> : <div>인기 더보기</div>}</>;
}
