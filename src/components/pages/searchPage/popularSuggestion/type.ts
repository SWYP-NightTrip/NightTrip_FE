import type { GenericAPIResponse } from '@/types/api';

export interface PopularSuggestion {
  id: string;
  name: string;
}

export type PopularSuggestionResponse = GenericAPIResponse<PopularSuggestion[]>;
