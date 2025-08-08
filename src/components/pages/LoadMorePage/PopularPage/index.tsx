import LoadMorePageContent from '@/components/pages/LoadMorePage/PopularPage/LoadMorePageContent';
import { Suspense } from 'react';

export default function LoadMorePage() {
  return (
    <Suspense>
      <LoadMorePageContent />
    </Suspense>
  );
}
