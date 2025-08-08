import Image from 'next/image';
import { useRouter } from 'next/navigation';

import RabbitIcon from '@/icons/search_items_rabbit.svg';

import type { SearchSuggestion } from '@/components/pages/searchPage/searchSuggestion/type';

interface SearchLinkProps {
  searchSuggestionData: SearchSuggestion;
}

export default function SearchLink({ searchSuggestionData }: SearchLinkProps) {
  const router = useRouter();

  const navigateTo = () => {
    router.push(`/detail/${searchSuggestionData.id.replace(/^tourist_spot_/, '')}`);
  };

  return (
    <div
      key={searchSuggestionData.id}
      onClick={navigateTo}
      className="flex items-center gap-2 px-4 cursor-pointer w-full h-[60px] hover:bg-nt-neutral-100 active:bg-nt-primary-600 group"
    >
      {searchSuggestionData.imageUrl ? (
        <Image
          src={searchSuggestionData.imageUrl}
          alt={searchSuggestionData.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-[50px] h-[50px] flex items-center justify-center bg-nt-neutral-50 rounded-[8px]">
          <RabbitIcon width={30} height={32} />
        </div>
      )}

      <div className="flex flex-col justify-center items-start">
        <span className="text-[18px] text-nt-neutral-900 font-medium text-center leading-[24px] group-active:text-white">
          {searchSuggestionData.name}
        </span>
        <span className="text-nt-neutral-400 text-sm font-normal leading-[20px] tracking-[0.014px] group-active:text-white">
          {searchSuggestionData.category} • {searchSuggestionData.cityName}
        </span>
      </div>
    </div>
  );
}
