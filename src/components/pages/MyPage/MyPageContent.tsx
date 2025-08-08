'use client';

import Footer from '@/components/common/footer';
import Profile from '@/components/pages/MyPage/profile';
import RecentPlans from '@/components/pages/MyPage/RecentPlans';
import { useRouter } from 'next/navigation';

export default function MyPageContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col designed-background min-h-screen">
      <Profile />
      <div className="flex flex-col mt-8 mx-3.5">
        <div className="flex flex-col mb-4.5">
          <p className="header3 text-nt-neutral-white">나의 여행</p>
          <p className="body2 text-nt-neutral-100">
            현재 계획하고 있는 여행을 더욱 빠르게 만나보세요!
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => router.push('#')}>
          <RecentPlans />
        </div>
      </div>
      <Footer />
      <div className="w-full h-[100px]"></div>
    </div>
  );
}
