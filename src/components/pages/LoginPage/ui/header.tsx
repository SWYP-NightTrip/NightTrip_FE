'use client';

import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';

import Back from '@/icons/back.svg';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <TopNav>
      <Button
        className="w-[42px] h-[42px] bg-transparent shadow-none text-black"
        onClick={handleBackClick}
      >
        <Back />
      </Button>
    </TopNav>
  );
}
