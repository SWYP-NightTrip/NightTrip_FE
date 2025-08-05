import {
  useMutation,
  useQueryClient,
  mutationOptions as tsqMutationOptions,
} from '@tanstack/react-query';

import { API_URL } from '@/utils/constant/url';

import { DetailSpotService } from '@/components/pages/DetailPage/detail/entities';
import { useModal } from '@/hooks/useModal';

import type { GenericAPIResponse } from '@/types/api';
import type { DetailSpotResponse } from '@/components/pages/DetailPage/detail/entities';

export type LikeResponse = GenericAPIResponse<{ data: null }>;

const requestLike = async (touristSpotId: string): Promise<LikeResponse> => {
  const response = await fetch(`${API_URL}/touristspot/${touristSpotId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`좋아요 요청 실패: ${response.status} ${response.statusText}`);
  }

  return response.json();
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
  const { modal } = useModal();
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
    },
    onError: () => {
      modal.loginError(true);
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
