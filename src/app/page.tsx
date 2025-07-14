import { Suspense } from 'react';

import Test from '@/components/common/Test';
import { getPosts } from '@/api/posts/getPosts';

import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';

export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HydrationPrefetchBoundary fetchQueryOptions={{ queryKey: ['posts'], queryFn: getPosts }}>
          <Test />
        </HydrationPrefetchBoundary>
      </Suspense>
    </div>
  );
}
