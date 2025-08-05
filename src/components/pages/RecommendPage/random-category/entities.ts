import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { API_URL } from '@/utils/constant/url';
import type { NightRecommendCategoryResponse } from '@/components/pages/MainPage/category/entities';

const requestNightRandomCategory = async (): Promise<NightRecommendCategoryResponse> => {
  const response = await fetch(`${API_URL}/main/recommend/random-category`);
  return response.json();
};

const keys = {
  root: () => ['recommend', 'random-categories'],
} as const;

export const nightRandomRecommendCategoryService = {
  queryKey: () => [...keys.root()],
  queryOptions: () => tsqQueryOptions<NightRecommendCategoryResponse>({
    queryKey: [...keys.root()],
    queryFn: () => requestNightRandomCategory(),
  }),
};

// 간단한 커스텀 훅
export const useGetRandomCategories = () => {
  return useSuspenseQuery(nightRandomRecommendCategoryService.queryOptions());
};
