import SearchPageContent from '@/components/pages/searchPage/SearchPageContent';

import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';

import { recommendSuggestionService } from '@/components/pages/searchPage/recommendSuggestion/entities';
import { popularSuggestionService } from '@/components/pages/searchPage/popularSuggestion/entities';

export default function SearchPage() {
  return (
    <HydrationPrefetchBoundary
      fetchQueryOptions={[
        recommendSuggestionService.queryOptions(),
        popularSuggestionService.queryOptions(),
      ]}
    >
      <SearchPageContent />
    </HydrationPrefetchBoundary>
  );
}
