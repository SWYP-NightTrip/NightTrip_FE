import { recommendSuggestions } from '@/components/pages/searchPage/recommendSuggestion/mock';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function RecommendSuggestions() {
  return <SearchKeywordSection title="추천 검색어" keywords={recommendSuggestions} />;
}
