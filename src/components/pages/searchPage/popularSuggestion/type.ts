import type { GenericAPIResponse } from '@/types/api';

export type PopularSuggestion = string;

export type PopularSuggestionResponse = GenericAPIResponse<PopularSuggestion[]>;
