import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';
import { getQueryClient } from '@/lib/tanstack/queryClient';
import { requestAPI } from '@/utils/request/request';

export interface DetailSpot {
  spotName: string;
  region: string;
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
  isLiked: boolean;
  spotImages: string[];
  hashTags: string[];
  spotDetails: {
    type: string;
    label: string;
  }[];
}

export type DetailSpotResponse = GenericAPIResponse<DetailSpot>;

const requestDetailSpot = async (id: string): Promise<DetailSpotResponse> => {
  return await requestAPI<DetailSpotResponse>({
    url: `${API_URL}/touristspot/${id}`,
    options: {
      method: 'GET',
      credentials: 'include',
    },
  });
};

const keys = {
  root: (id: string) => ['touristspot', `${id}`],
} as const;

export const DetailSpotService = {
  queryKey: (id: string) => [...keys.root(id)],
  invalidate: (id: string) => {
    getQueryClient().invalidateQueries({ queryKey: DetailSpotService.queryKey(id) });
  },
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
