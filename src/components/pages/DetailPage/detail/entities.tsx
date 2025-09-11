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

const requestDetailSpot = async (id: string, from?: string): Promise<DetailSpotResponse> => {
  if (from === 'ai') {
    // AI용 API 호출
    return await requestAPI<DetailSpotResponse>({
      url: `${API_URL}/recommend/spots/${id}`,
      options: {
        method: 'GET',
        credentials: 'include',
      },
    });
  }

  // 기본 API 호출
  return await requestAPI<DetailSpotResponse>({
    url: `${API_URL}/touristspot/${id}`,
    options: {
      method: 'GET',
      credentials: 'include',
    },
  });
};

const keys = {
  root: (id: string, from?: string) => ['touristspot', `${id}`, from],
} as const;

export const DetailSpotService = {
  queryKey: (id: string, from?: string) => [...keys.root(id, from)],
  invalidate: (id: string) => {
    getQueryClient().invalidateQueries({ queryKey: DetailSpotService.queryKey(id) });
  },
  queryOptions: (id: string, from?: string) => {
    return tsqQueryOptions<DetailSpotResponse>({
      queryKey: DetailSpotService.queryKey(id, from),
      queryFn: () => requestDetailSpot(id, from),
    });
  },
};

export const useGetDetailSpot = (id: string, from?: string) => {
  return useSuspenseQuery(DetailSpotService.queryOptions(id, from));
};
