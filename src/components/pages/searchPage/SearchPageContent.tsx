'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

import { debounce } from '@/utils/debounce';

import BackIcon from '@/icons/back.svg';
import SearchIcon from '@/icons/search-large.svg';
import InputGroup from '@/components/common/InputGroup';

import Spinner from '@/components/pages/searchPage/ui/Spinner';

import RecommendSuggestions from '@/components/pages/searchPage/recommendSuggestion';
import PopularSuggestion from '@/components/pages/searchPage/popularSuggestion';
import SearchSuggestions from '@/components/pages/searchPage/searchSuggestion';

export default function SearchPageContent() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  const updateQuery = debounce((newQuery: string) => {
    setSearchQuery(newQuery);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;

    updateQuery(newQuery);
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white px-2 flex justify-between items-center">
        <button
          className="w-[42px] h-[42px] bg-nt-white active:bg-nt-primary-50 p-2 rounded-nt-radius"
          onClick={handleBackClick}
        >
          <BackIcon />
        </button>

        <div className="flex-1">
          <InputGroup.Wrapper>
            <InputGroup.Input
              className="rounded-full"
              placeholder="여행지, 장소, 맛집, 숙소, 야경"
              onChange={handleInputChange}
            />
          </InputGroup.Wrapper>
        </div>

        <div className="flex items-center justify-center w-[42px] h-[56px] bg-transparent text-black">
          <SearchIcon />
        </div>
      </header>

      {searchQuery === '' && (
        <div className="mt-[44px] px-4 space-y-[50px]">
          <RecommendSuggestions />
          <PopularSuggestion />
        </div>
      )}

      {searchQuery !== '' && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[calc(100vh-56px)]">
              <Spinner />
            </div>
          }
        >
          <SearchSuggestions searchQuery={searchQuery} />
        </Suspense>
      )}
    </>
  );
}
