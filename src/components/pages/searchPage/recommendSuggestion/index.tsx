'use client';

import { useGetRecommendSuggestion } from '@/components/pages/searchPage/recommendSuggestion/entities';
import { recommendSuggestions } from '@/components/pages/searchPage/recommendSuggestion/mock';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function RecommendSuggestionsContent() {
  const { data } = useGetRecommendSuggestion();

  console.log(data, 'data');

  return <SearchKeywordSection title="추천 검색어" keywords={recommendSuggestions} />;
}
