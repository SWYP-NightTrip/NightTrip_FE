'use client';

import { useGetPopularSuggestion } from '@/components/pages/searchPage/popularSuggestion/entities';

import { popularSuggestions } from '@/components/pages/searchPage/popularSuggestion/mock';

import SearchKeywordSection from '@/components/pages/searchPage/ui/SearchKeywordSection';

export default function PopularSuggestion() {
  const { data } = useGetPopularSuggestion();

  console.log(data, 'data');

  return <SearchKeywordSection title="인기 검색어" keywords={popularSuggestions} />;
}
