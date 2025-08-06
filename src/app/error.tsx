'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  const router = useRouter();

  const goHomePage = () => {
    router.push('/');
  };

  const handleRetry = () => {
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        {/* 에러 아이콘 */}
        <div className="text-6xl text-nt-gray-300">⚠️</div>

        {/* 메인 메시지 */}
        <div className="flex flex-col gap-2">
          <h1 className="header1 text-nt-gray-900">예상치 못한 오류가 발생했어요</h1>
          <p className="body1 text-nt-gray-600">
            잠시 후 다시 시도해주세요
            <br />
            문제가 지속되면 문의해주세요
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
          <Button onClick={handleRetry} className="w-full">
            다시 시도하기
          </Button>

          <Button onClick={goHomePage} className="w-full">
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
