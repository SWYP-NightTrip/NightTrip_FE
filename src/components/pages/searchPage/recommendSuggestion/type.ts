import type { GenericAPIResponse } from '@/types/api';

export type RecommendSuggestion = {
  id: string;
  name: string;
};

export type RecommendSuggestionResponse = GenericAPIResponse<RecommendSuggestion[]>;
