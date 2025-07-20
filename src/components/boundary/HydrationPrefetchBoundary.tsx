import { QueryClient } from '@tanstack/react-query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import type { QueryKey, DefaultError, FetchQueryOptions } from '@tanstack/react-query';

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

export default HydrationPrefetchBoundary;
