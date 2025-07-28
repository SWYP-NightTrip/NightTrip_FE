import Badge from '@/components/common/Badge';
import Footer from '@/components/pages/MyPage/ui/footer';
import Header from '@/components/pages/MyPage/ui/header';
import Rabbit from '@/icons/rabbit.svg';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/images/calendar.png';
import { profile } from './entities/mock';

export default function MyPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center items-center h-[217px]">
        <Rabbit className="scale-166" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-[16px] py-[10px]">
        <p className="header1">{profile.userName}</p>
        <Badge className="bg-nt-secondary-500 text-nt-neutral-white border-0">Lv.{profile.level}</Badge>
      </div>
      <div className="flex justify-center items-center gap-14 py-5 px-2.5">
        <div className="flex flex-col items-center gap-2.5">
          <p className="header4 text-nt-neutral-400">북마크</p>
          <Link href="#" className="header1">
            {profile.bookmarked}개
          </Link>
        </div>
        <div className="border-r-1 border-nt-neutral-250 h-[51px]" />
        <div className="flex flex-col items-center gap-2.5">
          <p className="header4 text-nt-neutral-400">좋아요</p>
          <Link href="#" className="header1">
            {profile.liked}개
          </Link>
        </div>
      </div>

      <div className="border-1 my-4" />

      <div className="flex flex-col mt-2 mx-3.5">
        <div className="flex flex-col mb-2.5">
          <p className="header3">나의 여행</p>
          <p className="body2 text-nt-neutral-400">
            현재 계획하고 있는 여행을 더욱 빠르게 만나보세요!
          </p>
        </div>
        <Link href="#">
          <div className="group flex py-2.5 px-4 rounded-nt-radius bg-nt-neutral-50 gap-1 h-[79px] active:bg-nt-primary-600">
            <div className="flex items-center justify-center">
              <Image src={icon} alt="아이콘" width={50} height={50} />
            </div>

            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center">
                <p className="header4 group-active:text-nt-neutral-white">{profile.recentPlans[0].planTitle}</p>
                <p className="body5 text-nt-neutral-400 group-active:text-nt-neutral-white">
                  자세히보기
                </p>
              </div>
              <div className="flex items-center gap-2 body2 text-nt-neutral-400 group-active:text-nt-neutral-white">
                <span>Day-7</span>
                <div className="border-r-1 h-[12px] group-active:border-nt-neutral-white" />
                <span>7/14(수) - 7/30(월)</span>
                <div className="border-r-1 h-[12px] group-active:border-nt-neutral-white" />
                <span>6박 7일</span>
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
