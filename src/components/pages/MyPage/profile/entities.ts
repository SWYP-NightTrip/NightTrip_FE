// import { API_URL } from '@/utils/constant/url';
// import { useQuery } from '@tanstack/react-query';
import { cookies } from 'next/headers';

export const getMyPageData = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('SESSION');

  if (!session) {
    throw new Error('에러');
  }

  const res = await fetch(`https://dev.nighttrip.co.kr/api/v1/user/mypage`, {
    credentials: 'include',
    headers: {
      Cookie: `SESSION=${session.value}`,
    },
  });

  if (!res.ok) throw new Error('데이터 불러오기 실패');

  const json = await res.json();
  // console.log('json:',json);
  return json.data;
};
