import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';
import { requestAPI } from '@/utils/request/request';

import type { PopularSuggestionResponse } from './type';

const requestPopularSuggestion = async (): Promise<PopularSuggestionResponse> => {
  return await requestAPI<PopularSuggestionResponse>({
    url: `${API_URL}/search/popular`,
    options: {
      method: 'GET',
    },
  });
};

const keys = {
  root: ['search', 'popular'],
} as const;

export const popularSuggestionService = {
  queryKey: () => [...keys.root],
  queryOptions: () => {
    return tsqQueryOptions<PopularSuggestionResponse>({
      queryKey: popularSuggestionService.queryKey(),
      queryFn: () => requestPopularSuggestion(),
    });
  },
};

export const useGetPopularSuggestion = () => {
  return useSuspenseQuery(popularSuggestionService.queryOptions());
};
