'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { ErrorBoundary } from 'react-error-boundary';
import { UnExpectedAPIError } from '@/utils/request/error';

interface ErrorProps {
  resetErrorBoundary: () => void;
}

function DetailErrorFallback({ resetErrorBoundary }: ErrorProps) {
  const router = useRouter();

  const goHomePage = () => {
    router.push('/');
  };

  const handleRetry = () => {
    resetErrorBoundary();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="text-6xl text-nt-gray-300">⚠️</div>
        <div className="flex flex-col gap-2">
          <h1 className="header1 text-nt-gray-900">상세페이지 데이터를 요청할 수 없어요</h1>
          <p className="body1 text-nt-gray-600">
            잠시 후 다시 시도해주세요
            <br />
          </p>
        </div>

        <div className="mt-4">
          <Image
            src="/images/rabbit.png"
            alt="나이트 트립 대표 이미지"
            width={120}
            height={130}
            priority
          />
        </div>

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

interface DetailErrorBoundaryProps {
  children: React.ReactNode;
}

export default function DetailErrorBoundary({ children }: DetailErrorBoundaryProps) {
  const handleError = (error: Error) => {
    if (error instanceof UnExpectedAPIError) {
      throw error;
    }
  };

  return (
    <ErrorBoundary FallbackComponent={DetailErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
