import type { GenericAPIResponse } from '@/types/api';

export type RecommendSuggestion = string;

export type RecommendSuggestionResponse = GenericAPIResponse<RecommendSuggestion[]>;
