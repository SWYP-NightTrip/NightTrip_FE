import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';

export interface NightPopularCategory {
  id: number;
  name: string;
  stars: `${number}` | `${number}.${number}`;
  reviewCount: 2;
  location: string;
  imgUrl: string;
  distanceKm: number | null;
}

export type NightPopularCategoryResponse = GenericAPIResponse<NightPopularCategory[]>;

const requestNightPopularCategory = async (): Promise<NightPopularCategoryResponse> => {
  const response = await fetch(`${API_URL}/main/recommend/category`);
  return response.json();
};

const keys = {
  root: () => ['main', 'recommend', 'category'],
} as const;

export const nightPopularCategoryService = {
  queryKey: () => [...keys.root()],
  queryOptions: () => {
    return tsqQueryOptions<NightPopularCategoryResponse>({
      queryKey: nightPopularCategoryService.queryKey(),
      queryFn: () => requestNightPopularCategory(),
    });
  },
};

export const useGetNightPopularCategory = () => {
  return useSuspenseQuery(nightPopularCategoryService.queryOptions());
};
