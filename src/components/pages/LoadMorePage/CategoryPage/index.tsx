import LoadMoreCategoryContent from '@/components/pages/LoadMorePage/CategoryPage/LoadMoreCategoryContent';
import { Suspense } from 'react';

export default function LoadMoreCategoryPage() {
  return (
    <Suspense>
      <LoadMoreCategoryContent />
    </Suspense>
  );
}
