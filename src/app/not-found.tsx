'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

export default function NotFound() {
  const router = useRouter();

  const goHomePage = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        {/* 404 숫자 */}
        <div className="text-8xl font-bold text-nt-gray-300">404</div>

        {/* 메인 메시지 */}
        <div className="flex flex-col gap-2">
          <h1 className="header1 text-nt-gray-900">페이지를 찾을 수 없어요</h1>
          <p className="body1 text-nt-gray-600">
            요청하신 페이지가 존재하지 않거나
            <br />
            이동되었을 수 있습니다
          </p>
        </div>

        {/* 이미지 */}
        <div className="mt-4">
          <Image
            src="/images/rabbit.png"
            alt="나이트 트립 대표 이미지"
            width={120}
            height={130}
            priority
          />
        </div>

        {/* 버튼들 */}
        <div className="flex flex-col gap-3 w-full max-w-sm mt-8">
          <Button onClick={goHomePage} className="w-full">
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
