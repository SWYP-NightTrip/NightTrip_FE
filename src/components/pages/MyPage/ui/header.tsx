import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Back from '@/icons/back.svg';
import { useRouter } from 'next/navigation';
// import Setting from '@/icons/setting.svg';

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
    <TopNav className="bg-nt-neutral-white mb-10">
      <Button className="w-[42px] h-[42px] bg-transparent shadow-none" onClick={handleBackClick}>
        <Back />
      </Button>

      <p className="mx-auto header2">마이페이지</p>

      <div className="w-[42px]" />
      {/* 추후 설정 페이지 생성 시 적용 */}
      {/* <Link href="#" className='flex flex-row-reverse'>
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none">
          <Setting />
        </Button>
      </Link> */}
    </TopNav>
  );
}
