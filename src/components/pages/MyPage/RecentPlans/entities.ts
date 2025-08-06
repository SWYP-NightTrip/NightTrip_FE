import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/utils/constant/url';
import type { GenericAPIResponse } from '@/types/api';

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

export type MyPageResponse = GenericAPIResponse<{ recentPlans: MyPageProps['recentPlans'] }>;

const requestMyPageRecentPlans = async (): Promise<MyPageResponse> => {
  const res = await fetch(`${API_URL}/user/mypage`, {
    credentials: 'include',
  });

  return res.json();
};

export const useGetMyPageRecentPlans = () => {
  return useQuery({
    queryKey: ['mypage', 'recent-plans'],
    queryFn: requestMyPageRecentPlans,
  });
};
