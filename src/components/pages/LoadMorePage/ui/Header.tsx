import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Link from 'next/link';
import Back from '@/icons/back.svg';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({ title }: { title?: string }) {
  const pathname = usePathname();
  const isCategory = pathname.includes('/category');
  const headerTitle = title
    ? isCategory
      ? `회원님을 위한 [${title}] 추천`
      : `나잇트립이 엄선한 [${title}] 추천`
    : '밤에 떠나기 좋은 추천 여행지';

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

      <p className="mx-auto header2">{headerTitle}</p>

      <div className="w-[42px]" />
    </TopNav>
  );
}
