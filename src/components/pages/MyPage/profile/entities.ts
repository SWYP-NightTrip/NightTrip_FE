import type { MyPageProps } from '@/components/pages/MyPage/RecentPlans/entities';
import type { GenericAPIResponse } from '@/types/api';
import { API_URL } from '@/utils/constant/url';
import { useQuery } from '@tanstack/react-query';

export type MyPageResponse = GenericAPIResponse<MyPageProps>;

const requestMyPageProfile = async (): Promise<MyPageResponse> => {
  const res = await fetch(`${API_URL}/user/mypage`, {
    credentials: 'include',
  });

  return res.json();
};

export const useGetMyPageProfile = () => {
  return useQuery({
    queryKey: ['mypage'],
    queryFn: requestMyPageProfile,
  });
};
