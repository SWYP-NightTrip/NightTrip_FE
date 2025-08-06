'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/icons/back.svg';

import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  const goHomePage = () => {
    router.push('/');
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopNav>
        <button
          className="w-[42px] h-[42px] bg-nt-white active:bg-nt-primary-50 p-2 rounded-nt-radius"
          onClick={handleBackClick}
        >
          <BackIcon />
        </button>
      </TopNav>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <Image
          src={'/images/error/cry_rabbit.png'}
          width={120}
          height={130}
          alt="나이트 트립 우는 토끼 이미지"
        />

        {/* 텍스트 */}
        <div className="flex flex-col gap-2 mt-2.5">
          <h3 className="header3 text-nt-neutral-300">404 에러가 났어요</h3>
          <p className="body2 text-nt-neutral-300">요청하신 페이지가 없습니다</p>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="px-4 pb-8 mt-8">
        <Button onClick={goHomePage} className="w-full text-white py-3">
          메인으로
        </Button>
      </div>
    </div>
  );
}
