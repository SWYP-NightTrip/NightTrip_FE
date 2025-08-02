import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';

export interface NightPopularSpot {
  id: number;
  name: string;
  stars: `${number}` | `${number}.${number}`;
  reviewCount: 2;
  location: string;
  imgUrl: string;
  distanceKm: number | null;
}

export type NightPopularSpotResponse = GenericAPIResponse<NightPopularSpot[]>;

const requestNightPopularCategory = async (): Promise<NightPopularSpotResponse> => {
  const response = await fetch(`${API_URL}/main/recommend/night-popular`);
  return response.json();
};

const keys = {
  root: () => ['main', 'recommend', 'night-popular'],
} as const;

export const nightPopularSpotService = {
  queryKey: () => [...keys.root()],
  queryOptions: () => {
    return tsqQueryOptions<NightPopularSpotResponse>({
      queryKey: nightPopularSpotService.queryKey(),
      queryFn: () => requestNightPopularCategory(),
    });
  },
};

export const useGetNightPopularSpot = () => {
  return useSuspenseQuery(nightPopularSpotService.queryOptions());
};
