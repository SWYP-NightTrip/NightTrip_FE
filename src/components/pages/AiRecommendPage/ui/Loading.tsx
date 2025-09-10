import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-nt-neutral-400 gap-3.5">
      <Image src="/images/rabbit_glasses.png" alt="rabbit_glasses" width={60} height={60} />
      <div className="flex flex-col items-center justify-center">
        <p className="header4">선택하신 것을 바탕으로 추천지를</p>
        <p className="header4">고르고 있어요.</p>
      </div>

      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-nt-primary-500" />
    </div>
  );
}
