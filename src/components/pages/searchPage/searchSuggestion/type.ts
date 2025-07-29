import type { IGenericResponse } from '@/types/api';

export type SearchSuggestion = string;

export type SearchSuggestionResponse = IGenericResponse<SearchSuggestion[]>;
