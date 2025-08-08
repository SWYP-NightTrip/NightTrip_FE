import LoadMoreRandomCategoryContent from '@/components/pages/LoadMorePage/RandomCategoryPage/LoadMoreRandomCategoryContent';
import { Suspense } from 'react';

export default function LoadMoreRandomCategoryPage() {
  return (
    <Suspense>
      <LoadMoreRandomCategoryContent />
    </Suspense>
  );
}
