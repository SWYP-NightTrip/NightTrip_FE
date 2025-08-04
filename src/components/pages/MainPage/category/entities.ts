import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';

export interface NightRecommendCategory {
  category: string;
  spots: {
    id: number;
    name: string;
    stars: `${number}` | `${number}.${number}`;
    reviewCount: 2;
    location: string;
    imgUrl: string;
    distanceKm: number | null;
  }[];
}

export type NightRecommendCategoryResponse = GenericAPIResponse<NightRecommendCategory>;

const requestNightRecommendCategory = async (): Promise<NightRecommendCategoryResponse> => {
  const response = await fetch(`${API_URL}/main/recommend/category`);
  return response.json();
};

const keys = {
  root: () => ['main', 'recommend', 'category'],
} as const;

export const nightRecommendCategoryService = {
  queryKey: () => [...keys.root()],
  queryOptions: () => {
    return tsqQueryOptions<NightRecommendCategoryResponse>({
      queryKey: nightRecommendCategoryService.queryKey(),
      queryFn: () => requestNightRecommendCategory(),
    });
  },
};

export const useGetNightRecommendCategory = () => {
  return useSuspenseQuery(nightRecommendCategoryService.queryOptions());
};
