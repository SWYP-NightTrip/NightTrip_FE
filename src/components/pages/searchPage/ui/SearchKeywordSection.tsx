'use client';

import Link from 'next/link';

interface SearchKeyword {
  id: string;
  name: string;
}

interface SearchKeywordSectionProps {
  title: string;
  keywords: SearchKeyword[];
}

export default function SearchKeywordSection({ title, keywords }: SearchKeywordSectionProps) {
  return (
    <article>
      <h3 className="text-lg font-semibold text-gray-900 mb-[14px]">{title}</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {keywords.map(keyword => (
          <Link
            key={keyword.id}
            href={`/detail/${keyword.id.replace(/^tourist_spot_/, '')}`}
            className="px-4 py-2 flex items-center justify-center rounded-full bg-[#DEDEDE]"
          >
            <span className="max-w-[180px] text-sm text-[#5c5c5c] font-normal text-center leading-[20px] tracking-[0.1px] whitespace-nowrap overflow-hidden text-ellipsis">
              {keyword.name}
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
