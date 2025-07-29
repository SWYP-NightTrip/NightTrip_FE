import type { GenericAPIResponse } from '@/types/api';

export type SearchSuggestion = string;

export type SearchSuggestionResponse = GenericAPIResponse<SearchSuggestion[]>;
