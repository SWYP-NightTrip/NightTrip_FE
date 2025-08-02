'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { debounce } from '@/utils/debounce';

import BackIcon from '@/icons/back.svg';
import SearchIcon from '@/icons/search-large.svg';
import ResetInputIcon from '@/icons/reset-input.svg';
import InputGroup from '@/components/common/InputGroup';

import SearchSuggestions from '@/components/pages/searchPage/searchSuggestion';

export default function SearchPageContent() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchDebouncedQuery, setSearchDebouncedQuery] = useState('');

  const updateQuery = debounce((newQuery: string) => {
    setSearchDebouncedQuery(newQuery);
  }, 500);

  const searchReset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      updateQuery('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
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
              ref={inputRef}
              className="rounded-full"
              placeholder="여행지, 장소, 맛집, 숙소, 야경"
              onChange={handleInputChange}
            />
            <InputGroup.RightElement onClick={searchReset}>
              <ResetInputIcon />
            </InputGroup.RightElement>
          </InputGroup.Wrapper>
        </div>

        <div className="flex items-center justify-center w-[42px] h-[56px] bg-transparent text-black">
          <SearchIcon />
        </div>
      </header>

      <SearchSuggestions searchQuery={searchDebouncedQuery} />
    </>
  );
}
