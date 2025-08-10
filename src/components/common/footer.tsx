'use client';

import { usePathname } from 'next/navigation';

import MyIcon from '@/icons/my.svg';
import ActiveMyIcon from '@/icons/active_my.svg';
import HomeIcon from '@/icons/home.svg';
import ActiveHomeIcon from '@/icons/active_home.svg';
import BottomNav from '@/components/common/BottomNav';

import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();

  return (
    <BottomNav className="w-[375px] bg-[#FAF9FF] rounded-t-xl z-[100]">
      <Link href="/" className="flex flex-col items-center w-full">
        {pathname === '/' ? <ActiveHomeIcon /> : <HomeIcon />}
      </Link>
      <Link href="/my" className="flex flex-col items-center">
        {pathname === '/my' ? <ActiveMyIcon /> : <MyIcon />}
      </Link>
    </BottomNav>
  );
}
