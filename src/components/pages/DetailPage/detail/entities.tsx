import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';

export interface DetailSpot {
  spotName: string;
  address: string;
  checkCount: number | null;
  mainWeight: number;
  subWeight: number;
  category: string;
  link: string;
  spotDescription: string | null;
  telephone: string | null;
  latitude: number;
  longitude: number;
  starAverage: `${number}.${number}`;
  starCountSum: number;
  mainImage: string | null;
  spotImages: string[];
  spotDetails: string[];
}

export type DetailSpotResponse = GenericAPIResponse<DetailSpot>;

const requestDetailSpot = async (id: string): Promise<DetailSpotResponse> => {
  const response = await fetch(`${API_URL}/touristspot/${id}`);

  return response.json();
};

const keys = {
  root: (id: string) => ['touristspot', `${id}`],
} as const;

export const DetailSpotService = {
  queryKey: (id: string) => [...keys.root(id)],
  queryOptions: (id: string) => {
    return tsqQueryOptions<DetailSpotResponse>({
      queryKey: DetailSpotService.queryKey(id),
      queryFn: () => requestDetailSpot(id),
    });
  },
};

export const useGetDetailSpot = (id: string) => {
  return useSuspenseQuery(DetailSpotService.queryOptions(id));
};
