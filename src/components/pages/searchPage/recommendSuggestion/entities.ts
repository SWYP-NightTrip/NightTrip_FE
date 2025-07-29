import { queryOptions as tsqQueryOptions, useQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { RecommendSuggestionResponse } from './type';

const requestRecommendSuggestion = async (): Promise<RecommendSuggestionResponse> => {
  const response = await fetch(`${API_URL}/search/recommend`);
  return response.json();
};

const keys = {
  root: ['search', 'recommend'],
} as const;

export const recommendSuggestionService = {
  queryKey: () => [...keys.root],
  queryOptions: () => {
    return tsqQueryOptions<RecommendSuggestionResponse>({
      queryKey: recommendSuggestionService.queryKey(),
      queryFn: () => requestRecommendSuggestion(),
    });
  },
};

export const useGetRecommendSuggestion = () => {
  return useQuery(recommendSuggestionService.queryOptions());
};
