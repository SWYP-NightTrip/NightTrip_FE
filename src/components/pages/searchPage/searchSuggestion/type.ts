import type { GenericAPIResponse } from '@/types/api';

export type SearchSuggestion = {
  id: string;
  type: string;
  name: string;
  description: string;
  cityName: string;
  category: string;
  imageUrl: string | null;
  suggestName: string[];
};

export type SearchSuggestionResponse = GenericAPIResponse<SearchSuggestion[]>;
