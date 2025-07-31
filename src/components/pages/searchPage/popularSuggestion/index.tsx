'use client';

import { useGetPopularSuggestion } from '@/components/pages/searchPage/popularSuggestion/entities';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function PopularSuggestion() {
  const { data: popularSuggestions } = useGetPopularSuggestion();

  return <SearchKeywordSection title="인기 검색어" keywords={popularSuggestions.data} />;
}
