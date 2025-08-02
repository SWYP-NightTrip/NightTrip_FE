import { queryOptions as tsqQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import type { GenericAPIResponse } from '@/types/api';

export interface Partnership {
  id: number;
  label: string;
  imgUrl: string;
}

export type PartnershipResponse = GenericAPIResponse<Partnership[]>;

const requestPartnership = async (): Promise<PartnershipResponse> => {
  const response = await fetch(`${API_URL}/main/partner-services`);
  return response.json();
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
