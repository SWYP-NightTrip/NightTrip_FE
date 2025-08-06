import Image from 'next/image';
import icon from '@/images/calendar.png';
import RabbitCurious from '@/icons/rabbit-curious.svg';
import { useGetMyPageRecentPlans } from '@/components/pages/MyPage/RecentPlans/entities';
import { getDDay, getPlanPeriod } from '@/components/pages/MyPage/mapping/mapping';

export default function RecentPlans() {
  const { data } = useGetMyPageRecentPlans();
  const { recentPlans } = data.data;

  const period = getPlanPeriod(recentPlans[0]?.startDate, recentPlans[0]?.endDate);
  const dDay = getDDay(recentPlans[0]?.startDate);

  return (
    <div className="group flex py-2.5 px-4 rounded-nt-radius bg-nt-neutral-50/40 gap-1 h-[79px] active:bg-nt-primary-600/50 hover:bg-nt-primary-100">
      {recentPlans.length > 0 ? (
        <>
          <div className="flex items-center justify-center">
            <Image src={icon} alt="아이콘" width={50} height={50} />
          </div>

          <div className="flex flex-col w-full justify-center">
            <div className="flex justify-between items-center">
              <p className="header4 group-active:text-nt-neutral-white">
                {recentPlans[0].planTitle || ''}
              </p>
              <p className="body5 text-nt-neutral-400 group-active:text-nt-neutral-white">
                자세히보기
              </p>
            </div>
            <div className="flex items-center gap-2 body2 text-nt-neutral-400 group-active:text-nt-neutral-white">
              <span>Day-{dDay}</span>
              <div className="border-r-1 h-[12px] border-nt-neutral-300 group-active:border-nt-neutral-white" />
              <span>
                {period.startMonth}/{period.startDay}({period.startDayOfWeek}) - {period.endMonth}/
                {period.endDay}({period.endDayOfWeek})
              </span>
              <div className="border-r-1 h-[12px] border-nt-neutral-300 group-active:border-nt-neutral-white" />
              <span>
                {period.diffDay}박 {period.diffDay + 1}일
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center px-4 gap-4">
          <RabbitCurious />
          <div className="flex flex-col w-[212px]">
            <p className="header4 text-nt-neutral-400">아직 추가한 여행 계획이 없어요.</p>
            <p className="body2 text-nt-neutral-400">여행 계획을 추가해주세요.</p>
          </div>
        </div>
      )}
    </div>
  );
}
