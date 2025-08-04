// import { API_URL } from '@/utils/constant/url';
// import { useQuery } from '@tanstack/react-query';
import { cookies } from 'next/headers';

export const getMyPageData = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('SESSION');

  if (!session) {
    throw new Error('세션 없음');
  }

  const res = await fetch(`https://dev.nighttrip.co.kr/api/v1/user/mypage`, {
    credentials: 'include',
    headers: {
      Cookie: `SESSION=${session.value}`,
    },
  });

  if (!res.ok) throw new Error('데이터 불러오기 실패');

  const json = await res.json();

  return json.data;
};

export function getPlanPeriod(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDay = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return {
    startMonth: start.getMonth() + 1,
    endMonth: end.getMonth() + 1,
    startDay: start.getDate(),
    endDay: end.getDate(),
    startDayOfWeek: ['일','월','화','수','목','금','토'][start.getDay()],
    endDayOfWeek: ['일','월','화','수','목','금','토'][end.getDay()],
    diffDay,
  };
}

export function getDDay(startDate: string) {
  const start = new Date(startDate);
  return Math.ceil((start.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}

