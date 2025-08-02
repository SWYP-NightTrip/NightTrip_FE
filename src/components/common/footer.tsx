'use client';

import { usePathname } from 'next/navigation';

import MyIcon from '@/icons/my.svg';
import ActiveMyIcon from '@/icons/active_my.svg';
import HomeIcon from '@/icons/home.svg';
import ActiveHomeIcon from '@/icons/active_home.svg';
import PlanIcon from '@/icons/plan.svg';
import ActivePlanIcon from '@/icons/active_plan.svg';

import BottomNav from '@/components/common/BottomNav';

import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();

  return (
    <BottomNav className="w-[375px] bg-[#FAF9FF] rounded-t-xl">
      <Link href="/" className="flex flex-col items-center w-full">
        {pathname === '/' ? <ActiveHomeIcon /> : <HomeIcon />}
      </Link>
      <Link href="/schedule" className="flex flex-col items-center">
        {pathname === '/plan' ? <ActivePlanIcon /> : <PlanIcon />}
      </Link>
      <Link href="/my" className="flex flex-col items-center">
        {pathname === '/my' ? <ActiveMyIcon /> : <MyIcon />}
      </Link>
    </BottomNav>
  );
}
