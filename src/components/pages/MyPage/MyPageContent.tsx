'use client';

import Footer from '@/components/common/footer';
import Profile from '@/components/pages/MyPage/profile';
import RecentPlans from '@/components/pages/MyPage/RecentPlans';
import { useRouter } from 'next/navigation';

export default function MyPageContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col designed-background">
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

    // <div className="flex flex-col designed-background">
    //   <Header />
    //   <div className="flex justify-center items-center h-[180px]">
    //     <Image src={recentPlans.userAvatarUrl} alt="캐릭터 이미지" width={188} height={180} />
    //   </div>
    //   <div className="flex flex-col justify-center items-center gap-4 px-[16px] py-[10px]">
    //     <p className="header1 text-nt-neutral-white">{userName}</p>
    //     <Link href="#">
    //       <Badge className="bg-nt-secondary-500 text-md text-nt-neutral-white border-0 w-[200px] h-[33px] active:bg-nt-secondary-600 active:text-nt-neutral-white hover:bg-nt-secondary-100 hover:text-nt-neutral-400">
    //         좋아요 갯수&nbsp;
    //         <span className="text-nt-primary font-semibold">{likedSpotsCount}</span>개
    //       </Badge>
    //     </Link>
    //   </div>

    //   <div className="flex flex-col mt-8 mx-3.5">
    //     <div className="flex flex-col mb-4.5">
    //       <p className="header3 text-nt-neutral-white">나의 여행</p>
    //       <p className="body2 text-nt-neutral-100">
    //         현재 계획하고 있는 여행을 더욱 빠르게 만나보세요!
    //       </p>
    //     </div>
    //     <Link href="#">
    //       <RecentPlans />
    //     </Link>
    //   </div>
    //   <Footer />
    //   <div className="w-full h-[100px]"></div>
    // </div>
  );
}
