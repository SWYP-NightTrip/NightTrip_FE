import Button from '@/components/common/Button';
import TopNav from '@/components/common/TopNav';
import Link from 'next/link';
import Back from '@/icons/back.svg';
import { useRouter } from 'next/navigation';

export default function Header({ title }: { title: string }) {

  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <TopNav className="flex bg-nt-neutral-white">
      <Link href="#">
        <Button className="w-[42px] h-[42px] bg-transparent shadow-none" onClick={handleBackClick}>
          <Back />
        </Button>
      </Link>

      <p className="mx-auto header2">{title}</p>

      <div className="w-[42px]" />
    </TopNav>
  );
}
