import { useRouter } from 'next/navigation';

import { useGetSearchSuggestion } from '@/components/pages/searchPage/searchSuggestion/entities';

import SearchLink from '@/components/pages/searchPage/ui/SearchLink';
interface SearchSuggestionsProps {
  searchQuery: string;
}

export default function SearchSuggestions({ searchQuery }: SearchSuggestionsProps) {
  const { data: searchSuggestions } = useGetSearchSuggestion(searchQuery);

  const router = useRouter();

  const handleSearch = (id: string) => () => {
    router.push(`/trip/${id}`);
  };

  return (
    <div className="mt-3.5">
      {searchSuggestions.data.map(suggestion => (
        <div
          key={suggestion.id}
          onClick={handleSearch(suggestion.id)}
          className="flex items-center gap-4 px-4 cursor-pointer w-full h-[60px] hover:bg-nt-neutral-100 active:bg-nt-primary-600"
        >
          <SearchLink searchSuggestionData={suggestion} />
        </div>
      ))}
    </div>
  );
}
