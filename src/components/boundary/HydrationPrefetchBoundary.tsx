/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from '@tanstack/react-query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import type { QueryKey, DefaultError, FetchQueryOptions } from '@tanstack/react-query';

type AnyFetchQueryOptions = FetchQueryOptions<any, DefaultError, any, QueryKey>;

export default async function HydrationPrefetchBoundary({
  fetchQueryOptions,
  children,
}: {
  fetchQueryOptions: AnyFetchQueryOptions[];
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await Promise.all(fetchQueryOptions.map(option => queryClient.prefetchQuery(option)));

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
