import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';
import { requestAPI } from '@/utils/request/request';

export interface NightRecommendCategory {
  category: string;
  spots: {
    id: number;
    name: string;
    stars: `${number}` | `${number}.${number}`;
    reviewCount: number;
    location: string;
    imgUrl: string;
    distanceKm: number | null;
  }[];
}

export type NightRecommendCategoryResponse = GenericAPIResponse<NightRecommendCategory>;

const requestNightRecommendCategory = async (): Promise<NightRecommendCategoryResponse> => {
  return await requestAPI<NightRecommendCategoryResponse>({
    url: `${API_URL}/main/recommend/category`,
    options: {
      method: 'GET',
    },
  });
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
