'use client';

import { useGetRecommendSuggestion } from '@/components/pages/searchPage/recommendSuggestion/entities';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function RecommendSuggestionsContent() {
  const { data: recommendSuggestions } = useGetRecommendSuggestion();

  return <SearchKeywordSection title="추천 검색어" keywords={[...recommendSuggestions.data]} />;
}
