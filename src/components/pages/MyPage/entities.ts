import type { GenericAPIResponse } from '@/types/api';
import { API_URL } from '@/utils/constant/url';
import { useQuery } from '@tanstack/react-query';

export interface MyPageProps {
  userName: string;
  userAvatarUrl: string;
  level: number;
  bookmarkedSpotsCount: number;
  likedSpotsCount: number;
  recentPlans: {
    planId: number;
    planTitle: string;
    planPhotoUrl: string | null;
    startDate: string;
    endDate: string;
  }[];
}

export type MyPageResponse = GenericAPIResponse<MyPageProps>;

const requestMyPageProfile = async (): Promise<MyPageResponse> => {
  const res = await fetch(`${API_URL}/user/mypage`, {
    credentials: 'include',
  });

  return res.json();
};

export const useGetMyPageProfile = () => {
  return useQuery({
    queryKey: ['user', 'myPage'],
    queryFn: requestMyPageProfile,
    staleTime: 0,
  });
};
