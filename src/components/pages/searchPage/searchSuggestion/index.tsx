import { useRouter } from 'next/navigation';

import { useGetSearchSuggestion } from '@/components/pages/searchPage/searchSuggestion/entities';

import SearchLink from '@/components/pages/searchPage/ui/SearchLink';
import RecommendSuggestions from '@/components/pages/searchPage/recommendSuggestion';
import PopularSuggestion from '@/components/pages/searchPage/popularSuggestion';
import Spinner from '@/components/pages/searchPage/ui/Spinner';

import SearchErrorBoundary from '@/components/pages/searchPage/ui/SearchErrorBoundary';
import Image from 'next/image';
interface SearchSuggestionsProps {
  searchQuery: string;
}

export default function SearchSuggestions({ searchQuery }: SearchSuggestionsProps) {
  const { isLoading, data: searchSuggestions, isEnabled } = useGetSearchSuggestion(searchQuery);

  const router = useRouter();

  const handleSearch = (id: string) => () => {
    router.push(`/trip/${id}`);
  };

  if (!isEnabled) {
    return (
      <div className="mt-[44px] px-4 space-y-[50px]">
        <SearchErrorBoundary dataType="추천 검색어 (여행지)">
          <RecommendSuggestions />
        </SearchErrorBoundary>
        <SearchErrorBoundary dataType="인기 검색어 (여행지)">
          <PopularSuggestion />
        </SearchErrorBoundary>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-56px)]">
        <Spinner />
      </div>
    );
  }

  if (searchSuggestions?.data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-56px)]">
        <Image src={'/images/rabbit.png'} width={120} height={130} alt="나이트 트립 토끼 로고" />
        <div className="mt-2.5">
          <div className="header3 text-nt-neutral-300">검색 결과가 없어요</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3.5">
      {searchSuggestions?.data.map(suggestion => (
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
