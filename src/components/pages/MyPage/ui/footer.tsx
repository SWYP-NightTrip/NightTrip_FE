'use client';

import BottomNav from '@/components/common/BottomNav';

import HomeIcon from '@/icons/home.svg';
import ScheduleIcon from '@/icons/schedule.svg';
import PlanIcon from '@/icons/plan.svg';
import MyIcon from '@/icons/my.svg';

import Link from 'next/link';

export default function Footer() {

  return (
    <BottomNav className="w-[375px] bg-[#FAF9FF] rounded-t-xl">
      <Link href="/" className="flex flex-col items-center w-full">
        <HomeIcon />
      </Link>
      <Link href="/schedule" className="flex flex-col items-center">
        <ScheduleIcon />
      </Link>
      <Link href="/plan" className="flex flex-col items-center">
        <PlanIcon />
      </Link>
      <Link href="/my" className="flex flex-col items-center">
        <MyIcon />
      </Link>
    </BottomNav>
  );
}
