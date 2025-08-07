import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Link from 'next/link';
import Back from '@/icons/back.svg';

export default function Header() {
  return (
    <TopNav className='flex'>
      <Link href="#">
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none">
          <Back />
        </Button>
      </Link>

      <p className="mx-auto header2">나잇트립 추천 여행지</p>

      <div className='w-[42px]'/>
    </TopNav>
  );
}
