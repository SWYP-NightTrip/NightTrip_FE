import Link from 'next/link';
import Image from 'next/image';

export default function AiFloatingButton() {
  return (
    <>
      <Link
        href="/ai-recommend/form"
        className="flex flex-col justify-center items-center designed-background text-nt-neutral-white w-full h-full rounded-full border-2 border-nt-neutral-250"
      >
        <Image src="/images/rabbit_glasses.png" alt="rabbit_glasses" height={36} width={36} />
        <p className="body5">AI 추천</p>
      </Link>
    </>
  );
}
