import type { DefaultError, FetchQueryOptions, QueryKey } from '@tanstack/react-query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import Test from '@/components/common/Test';
import { getPosts } from '@/api/posts/getPosts';
import { Suspense } from 'react';

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

async function HydrationPrefetchBoundary<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>({
  fetchQueryOptions,
  children,
}: {
  fetchQueryOptions: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(fetchQueryOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
