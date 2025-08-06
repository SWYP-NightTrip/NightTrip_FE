import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';
import { requestAPI } from '@/utils/request/request';

export interface Partnership {
  id: number;
  label: string;
  imgUrl: string;
}

export type PartnershipResponse = GenericAPIResponse<Partnership[]>;

const requestPartnership = async (): Promise<PartnershipResponse> => {
  return await requestAPI<PartnershipResponse>({
    url: `${API_URL}/main/partner-services`,
    options: {
      method: 'GET',
    },
  });
};

const keys = {
  root: () => ['main', 'partner-services'],
} as const;

export const partnershipService = {
  queryKey: () => [...keys.root()],
  queryOptions: () => {
    return tsqQueryOptions<PartnershipResponse>({
      queryKey: partnershipService.queryKey(),
      queryFn: () => requestPartnership(),
    });
  },
};

export const useGetPartnership = () => {
  return useSuspenseQuery(partnershipService.queryOptions());
};
