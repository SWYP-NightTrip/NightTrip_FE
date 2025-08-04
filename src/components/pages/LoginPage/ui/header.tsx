import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';

import Back from '@/icons/back.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <TopNav>
      <Button className="w-[42px] h-[42px] bg-transparent shadow-none text-black">
        <Link href="/">
          <Back />
        </Link>
      </Button>
    </TopNav>
  );
}
