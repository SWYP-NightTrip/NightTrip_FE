import {
  useMutation,
  useQueryClient,
  mutationOptions as tsqMutationOptions,
} from '@tanstack/react-query';

import { DetailSpotService } from '@/components/pages/DetailPage/detail/entities';

import { API_URL } from '@/utils/constant/url';
import { requestAPI } from '@/utils/request/request';

import type { GenericAPIResponse } from '@/types/api';
import type { DetailSpotResponse } from '@/components/pages/DetailPage/detail/entities';

export type LikeResponse = GenericAPIResponse<{ data: null }>;

const requestLike = async (touristSpotId: string): Promise<LikeResponse> => {
  return await requestAPI<LikeResponse>({
    url: `${API_URL}/touristspot/${touristSpotId}/like`,
    options: {
      method: 'POST',
      credentials: 'include',
    },
  });
};

const keys = {
  root: (id: string) => ['touristspot', id, 'like'],
} as const;

export const likeService = {
  mutationKey: (id: string) => [...keys.root(id)],
  mutationOptions: (id: string) => {
    return tsqMutationOptions<LikeResponse>({
      mutationKey: likeService.mutationKey(id),
      mutationFn: () => requestLike(id),
    });
  },
};

export const useLikeMutation = (touristSpotId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: likeService.mutationKey(touristSpotId),
    mutationFn: () => requestLike(touristSpotId),
    onSuccess: () => {
      queryClient.setQueryData(
        DetailSpotService.queryKey(touristSpotId),
        (old: DetailSpotResponse) => {
          return {
            ...old,
            data: {
              ...old.data,
              isLiked: !old.data.isLiked,
            },
          };
        },
      );

      queryClient.invalidateQueries({ queryKey: ['user', 'myPage'] });
    },
  });
};

export const useLike = (touristSpotId: string) => {
  const mutation = useLikeMutation(touristSpotId);

  const toggleLike = () => {
    mutation.mutate();
  };

  return {
    toggleLike,
  };
};
