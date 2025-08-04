import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';
import { nightRecommendCategoryService } from '@/components/pages/MainPage/category/entities';
import { partnershipService } from '@/components/pages/MainPage/partnership/entities';
import { nightPopularSpotService } from '@/components/pages/MainPage/popular/entities';

import MainPageContent from './MainPageContent';

export default function MainPage() {
  return (
    <HydrationPrefetchBoundary
      fetchQueryOptions={[
        nightRecommendCategoryService.queryOptions(),
        nightPopularSpotService.queryOptions(),
        partnershipService.queryOptions(),
      ]}
    >
      <MainPageContent />
    </HydrationPrefetchBoundary>
  );
}
