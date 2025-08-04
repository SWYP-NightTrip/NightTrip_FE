import Badge from '@/components/common/Badge';
import Footer from '@/components/common/footer';
import Header from '@/components/pages/MyPage/ui/header';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/images/calendar.png';

import { getMyPageData, getPlanPeriod, getDDay } from '@/components/pages/MyPage/profile/entities';

export default async function MyPage() {
  const { userAvatarUrl, userName, likedSpotsCount, recentPlans } = await getMyPageData();
  const period = getPlanPeriod(recentPlans[0].startDate, recentPlans[0].endDate);
  const dDay = getDDay(recentPlans[0].startDate);

  return (
    <div className="flex flex-col designed-background">
      <Header />
      <div className="flex justify-center items-center h-[180px]">
        {userAvatarUrl ? (
          <Image src={userAvatarUrl} alt="캐릭터 이미지" width={188} height={180} />
        ) : null}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-[16px] py-[10px]">
        <p className="header1 text-nt-neutral-white">{userName}</p>
        <Link href="#">
          <Badge className="bg-nt-secondary-500 text-md text-nt-neutral-white border-0 w-[200px] h-[33px] active:bg-nt-secondary-600 active:text-nt-neutral-white hover:bg-nt-secondary-100 hover:text-nt-neutral-400">
            좋아요 갯수&nbsp;
            <span className="text-nt-primary font-semibold">{likedSpotsCount}</span>개
          </Badge>
        </Link>
      </div>

      <div className="flex flex-col mt-8 mx-3.5">
        <div className="flex flex-col mb-4.5">
          <p className="header3 text-nt-neutral-white">나의 여행</p>
          <p className="body2 text-nt-neutral-100">
            현재 계획하고 있는 여행을 더욱 빠르게 만나보세요!
          </p>
        </div>
        <Link href="#">
          <div className="group flex py-2.5 px-4 rounded-nt-radius bg-nt-neutral-50/40 gap-1 h-[79px] active:bg-nt-primary-600/50 hover:bg-nt-primary-100">
            <div className="flex items-center justify-center">
              <Image src={icon} alt="아이콘" width={50} height={50} />
            </div>

            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center">
                <p className="header4 group-active:text-nt-neutral-white">
                  {recentPlans[0]?.planTitle || ''}
                </p>
                <p className="body5 text-nt-neutral-400 group-active:text-nt-neutral-white">
                  자세히보기
                </p>
              </div>
              <div className="flex items-center gap-2 body2 text-nt-neutral-400 group-active:text-nt-neutral-white">
                <span>Day-{dDay}</span>
                <div className="border-r-1 h-[12px] border-nt-neutral-300 group-active:border-nt-neutral-white" />
                <span>
                  {period.startMonth}/{period.startDay}({period.startDayOfWeek}) - {period.endMonth}/{period.endDay}({period.endDayOfWeek})
                </span>
                <div className="border-r-1 h-[12px] border-nt-neutral-300 group-active:border-nt-neutral-white" />
                <span>
                  {period.diffDay}박 {period.diffDay + 1}일
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
      <div className="w-full h-[100px]"></div>
    </div>
  );
}
