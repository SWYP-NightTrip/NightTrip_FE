import { popularSuggestions } from '@/components/pages/searchPage/popularSuggestion/mock';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function PopularSuggestion() {
  return <SearchKeywordSection title="인기 검색어" keywords={popularSuggestions} />;
}
