import { queryOptions as tsqQueryOptions, useQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { PopularSuggestionResponse } from './type';

const requestPopularSuggestion = async (): Promise<PopularSuggestionResponse> => {
  const response = await fetch(`${API_URL}/search/popular`);
  return response.json();
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
  return useQuery(popularSuggestionService.queryOptions());
};
