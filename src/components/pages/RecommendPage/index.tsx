import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';
import { nightRecommendCategoryService } from '@/components/pages/MainPage/category/entities';
import { nightPopularSpotService } from '@/components/pages/MainPage/popular/entities';
import { nightRandomRecommendCategoryService } from '@/components/pages/RecommendPage/random-category/entities';
import RecommendPageContent from '@/components/pages/RecommendPage/RecommendPageContent';

export default function RecommendPage() {
  return (
    <HydrationPrefetchBoundary
      fetchQueryOptions={[
        nightRecommendCategoryService.queryOptions(),
        nightPopularSpotService.queryOptions(),
        nightRandomRecommendCategoryService.queryOptions(),
      ]}
    >
      <RecommendPageContent />
    </HydrationPrefetchBoundary>
  );
}
