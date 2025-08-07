import type { GenericAPIResponse } from '@/types/api';
import { API_URL } from '@/utils/constant/url';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface MoreNightRecommend {
  content: {
    id: number;
    name: string;
    // stars: `${number}.${number}` | number;
    stars: string;
    reviewCount: number;
    location: string;
    imgUrl: string;
    distanceKm: number | null;
  }[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  empty: boolean;
}

export type MoreNightRecommendResponse = GenericAPIResponse<MoreNightRecommend>;

// const requestMoreNightRecommend = async (type?: string): Promise<MoreNightRecommendResponse>=> {
//   const url = type
//     ? `${API_URL}/main/recommend/category/all?type=${encodeURIComponent(type)}`
//     : `${API_URL}/main/recommend/night-popular/all`;

//   const res = await fetch(url);

//   return res.json();
// };

// export const useGetMoreNightRecommend = (type?: string) => {
//   return useQuery({
//     queryKey: ['moreNightRecommend', type],
//     queryFn: () => requestMoreNightRecommend(type),
//   });
// };

const requestInfiniteMoreNightRecommend = async ({
  pageParam = 0,
  type,
}: {
  pageParam?: number;
  type?: string;
}): Promise<MoreNightRecommendResponse> => {
  const url = type
    ? `${API_URL}/main/recommend/category/all?type=${encodeURIComponent(type)}&page=${pageParam}&size=6`
    : `${API_URL}/main/recommend/night-popular/all?page=${pageParam}&size=6`;

  const res = await fetch(url);
  return res.json();
};

export const useInfiniteMoreNightRecommend = (type?: string) => {
  return useInfiniteQuery({
    queryKey: ['moreNightRecommend', type],
    queryFn: ({ pageParam = 0 }) => requestInfiniteMoreNightRecommend({ pageParam, type }),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (lastPage && lastPage.data && lastPage.data.last === false) {
        return lastPage.data.number + 1;
      }
      return undefined;
    },
  });
};
