import { ErrorBoundary } from 'react-error-boundary';

import { UnExpectedAPIError } from '@/utils/request/error';

function SearchErrorFallback({ dataType }: { dataType: string }) {
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

interface SearchErrorBoundaryProps {
  dataType: string;
  children: React.ReactNode;
}

export default function SearchErrorBoundary({ dataType, children }: SearchErrorBoundaryProps) {
  const handleError = (error: Error) => {
    if (error instanceof UnExpectedAPIError) {
      throw error;
    }
  };

  return (
    <ErrorBoundary fallback={<SearchErrorFallback dataType={dataType} />} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
