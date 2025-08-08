import type { GenericAPIResponse } from '@/types/api';
import { API_URL } from '@/utils/constant/url';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface LikeListsData {
  content: {
    spotId: number;
    spotName: string;
    address: string;
    category: string;
    imageUrl: string | null;
  }[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}

export type LikeListsResponse = GenericAPIResponse<LikeListsData>;

const requestInfiniteLikeLists = async ({
  pageParam = 0,
}: {
  pageParam: number;
}): Promise<LikeListsResponse> => {
  const res = await fetch(`${API_URL}/user/mypage/likes?page=${pageParam}&size=5`, {
    credentials: 'include',
  });

  return res.json();
};

export const useInfiniteLikeLists = () => {
  return useInfiniteQuery({
    queryKey: ['user', 'mypage', 'likes'],
    queryFn: ({ pageParam = 0 }) => requestInfiniteLikeLists({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (lastPage && lastPage.data && lastPage.data.last === false) {
        return lastPage.data.number + 1;
      }
      return undefined;
    },
  });
};
