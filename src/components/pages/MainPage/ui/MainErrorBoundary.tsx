import { UnExpectedAPIError } from '@/utils/request/error';
import { ErrorBoundary } from 'react-error-boundary';

function MainErrorFallback({ dataType }: { dataType: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* 메시지 */}
        <div className="flex flex-col gap-2">
          <p className="body1 text-nt-gray-900">{dataType} 데이터를 요청할 수 없습니다</p>
        </div>
      </div>
    </div>
  );
}

interface MainErrorBoundaryProps {
  dataType: string;
  children: React.ReactNode;
}

export default function MainErrorBoundary({ dataType, children }: MainErrorBoundaryProps) {
  const handleError = (error: Error) => {
    if (error instanceof UnExpectedAPIError) {
      throw error;
    }
  };

  return (
    <ErrorBoundary fallback={<MainErrorFallback dataType={dataType} />} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
