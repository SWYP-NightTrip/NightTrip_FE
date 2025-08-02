import type { SearchSuggestion } from '@/components/pages/searchPage/searchSuggestion/type';
import { FALLBACK_PARTNERSHIP_IMAGE_URL } from '@/utils/constant/url';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchLinkProps {
  searchSuggestionData: SearchSuggestion;
}

export default function SearchLink({ searchSuggestionData }: SearchLinkProps) {
  const router = useRouter();

  const navigateTo = () => {
    router.push(`/trip/${searchSuggestionData.id}`);
  };

  return (
    <div
      key={searchSuggestionData.id}
      onClick={navigateTo}
      className="flex items-center gap-2 px-4 cursor-pointer w-full h-[60px] hover:bg-nt-neutral-100 active:bg-nt-primary-600 group"
    >
      <Image
        src={searchSuggestionData.imageUrl ?? FALLBACK_PARTNERSHIP_IMAGE_URL}
        alt={searchSuggestionData.name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
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
