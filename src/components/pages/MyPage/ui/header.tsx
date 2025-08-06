import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Link from 'next/link';
import Back from '@/icons/back.svg';
// import Setting from '@/icons/setting.svg';

export default function Header() {
  return (
    <TopNav className='bg-nt-neutral-white mb-10'>
      <Link href="#">
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none">
          <Back />
        </Button>
      </Link>

      <p className='mx-auto header2'>마이페이지</p>

      <div className='w-[42px]'/>
      {/* 추후 설정 페이지 생성 시 적용 */}
      {/* <Link href="#" className='flex flex-row-reverse'>
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none">
          <Setting />
        </Button>
      </Link> */}
    </TopNav>
  );
}
