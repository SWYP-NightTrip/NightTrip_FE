import { useGetSearchSuggestion } from '@/components/pages/searchPage/searchSuggestion/entities';

interface SearchSuggestionsProps {
  searchQuery: string;
}

export default function SearchSuggestions({ searchQuery }: SearchSuggestionsProps) {
  const { data } = useGetSearchSuggestion(searchQuery);

  return <div>{data.data.map(item => item)}</div>;
}
