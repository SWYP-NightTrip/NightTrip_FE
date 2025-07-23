import BottomNav from '@/components/common/BottomNav';

import HomeIcon from '../../../../public/icons/home.svg';
import ScheduleIcon from '../../../../public/icons/schedule.svg';
import PlanIcon from '../../../../public/icons/plan.svg';
import MyIcon from '../../../../public/icons/my.svg';

export default function Footer() {
  return (
    <BottomNav className="w-[375px] bg-[#FAF9FF] rounded-t-xl">
      <div className="flex flex-col items-center w-full">
        <HomeIcon />
      </div>
      <div className="flex flex-col items-center">
        <ScheduleIcon />
      </div>
      <div className="flex flex-col items-center">
        <PlanIcon />
      </div>
      <div className="flex flex-col items-center">
        <MyIcon />
      </div>
    </BottomNav>
  );
}
