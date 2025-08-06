import { queryOptions as tsqQueryOptions, useQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';
import { requestAPI } from '@/utils/request/request';

import type { SearchSuggestionResponse } from '@/components/pages/searchPage/searchSuggestion/type';

const requestSearchSuggestion = async (query: string): Promise<SearchSuggestionResponse> => {
  return await requestAPI<SearchSuggestionResponse>({
    url: `${API_URL}/search?query=${query}`,
    options: {
      method: 'GET',
    },
  });
};

const keys = {
  root: (query: string) => ['search', { query }],
} as const;

export const searchSuggestionService = {
  queryKey: (query: string) => [...keys.root(query)],
  queryOptions: (query: string) => {
    return tsqQueryOptions<SearchSuggestionResponse>({
      queryKey: searchSuggestionService.queryKey(query),
      queryFn: () => requestSearchSuggestion(query),
      enabled: query.trim() !== '',
    });
  },
};

export const useGetSearchSuggestion = (searchQuery: string) => {
  return useQuery(searchSuggestionService.queryOptions(searchQuery));
};
