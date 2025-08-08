import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Link from 'next/link';
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
    <TopNav className="flex">
      <Link href="#">
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none" onClick={handleBackClick}>
          <Back />
        </Button>
      </Link>

      <p className="mx-auto header2">나잇트립 추천 여행지</p>

      <div className="w-[42px]" />
    </TopNav>
  );
}
