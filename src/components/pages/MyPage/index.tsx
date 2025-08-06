import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';
import MyPageContent from '@/components/pages/MyPage/MyPageContent';

export default async function MyPage() {
  return (
    <HydrationPrefetchBoundary fetchQueryOptions={[]}>
      <MyPageContent />
    </HydrationPrefetchBoundary>
  );
}
