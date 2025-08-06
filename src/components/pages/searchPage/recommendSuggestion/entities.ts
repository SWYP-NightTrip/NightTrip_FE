import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';
import { requestAPI } from '@/utils/request/request';

import type { RecommendSuggestionResponse } from './type';

const requestRecommendSuggestion = async (): Promise<RecommendSuggestionResponse> => {
  return await requestAPI<RecommendSuggestionResponse>({
    url: `${API_URL}/search/recommend`,
    options: {
      method: 'GET',
    },
  });
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
  return useSuspenseQuery(recommendSuggestionService.queryOptions());
};
