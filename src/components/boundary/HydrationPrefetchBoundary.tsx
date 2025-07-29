import { QueryClient } from '@tanstack/react-query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import type { QueryKey, DefaultError, FetchQueryOptions } from '@tanstack/react-query';

export default async function HydrationPrefetchBoundary<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>({
  fetchQueryOptions,
  children,
}: {
  fetchQueryOptions: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>[];
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await Promise.all(fetchQueryOptions.map(option => queryClient.prefetchQuery(option)));

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
