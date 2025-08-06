'use client';

import Link from 'next/link';

import SearchIcon from '@/icons/search.svg';

import Header from './ui/header';
import Footer from '@/components/common/footer';

import NightTripPartnership from '@/components/pages/MainPage/partnership';
import NightPopularSpot from '@/components/pages/MainPage/popular';
import NightRecommendCategory from '@/components/pages/MainPage/category';

export default function MainPageContent() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <div className="pl-4 pt-2.5 pb-5">
        <NightTripPartnership />
      </div>
      <div className="px-4">
        <Link
          href="/search"
          className="px-4 py-[9px] flex items-center justify-between w-full h-[46px] rounded-[30px] border border-[rgba(118,114,218,0.40)] bg-[rgba(255,255,255,0.60)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]"
        >
          <p className="text-[#2C2C2C] text-sm font-normal leading-5 tracking-[0.014px] overflow-hidden text-ellipsis whitespace-nowrap">
            여행지, 숙소, 맛집, 관광지를 검색해보세요!
          </p>
          <button className="h-[26px] w-[44px] rounded-[100px] bg-[#E0DEF9] cursor-pointer flex items-center justify-center">
            <SearchIcon />
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[2px] px-4 mt-5">
        <h3 className="text-nt-neutral-black leading-6 font-semibold text-lg">
          나잇트립의 추천 여행지
        </h3>
        <span className="text-nt-neutral-400 leading-[22px] text-sm">
          오후에 여행하기 좋은 추천 여행지, 포토스팟 등
        </span>
      </div>
      <NightPopularSpot />
      <NightRecommendCategory />
      <div className="w-full h-[100px]"></div> {/* Footer 높이만큼 빈 공간 추가 */}
      <Footer />
    </div>
  );
}
