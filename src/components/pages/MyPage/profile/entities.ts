// // import { API_URL } from '@/utils/constant/url';
// // import { useQuery } from '@tanstack/react-query';
// import { cookies } from 'next/headers';

import type { MyPageProps } from '@/components/pages/MyPage/RecentPlans/entities';
import type { GenericAPIResponse } from '@/types/api';
import { API_URL } from '@/utils/constant/url';
import { useSuspenseQuery } from '@tanstack/react-query';

// export const getMyPageData = async () => {
//   const cookieStore = await cookies();
//   const session = cookieStore.get('SESSION');

//   if (!session) {
//     throw new Error('세션 없음');
//   }

//   const res = await fetch(`https://dev.nighttrip.co.kr/api/v1/user/mypage`, {
//     credentials: 'include',
//     headers: {
//       Cookie: `SESSION=${session.value}`,
//     },
//   });

//   if (!res.ok) throw new Error('데이터 불러오기 실패');

//   const json = await res.json();

//   return json.data;
// };
export type MyPageResponse = GenericAPIResponse<MyPageProps>;

const requestMyPageProfile = async (): Promise<MyPageResponse> => {
  const res = await fetch(`${API_URL}/user/mypage`, {
    credentials: 'include',
  });

  return res.json();
};

export const useGetMyPageProfile = () => {
  return useSuspenseQuery({
    queryKey: ['mypage'],
    queryFn: requestMyPageProfile,
  });
};
