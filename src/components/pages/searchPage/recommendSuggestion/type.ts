import type { IGenericResponse } from '@/types/api';

export type RecommendSuggestion = string;

export type RecommendSuggestionResponse = IGenericResponse<RecommendSuggestion[]>;
