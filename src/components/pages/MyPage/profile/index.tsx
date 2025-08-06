import Badge from '@/components/common/Badge';
import { useGetMyPageProfile } from '@/components/pages/MyPage/profile/entities';
import Header from '@/components/pages/MyPage/ui/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  const { data } = useGetMyPageProfile();

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[180px]">
        <Image src={data?.data.userAvatarUrl ?? '/images/fallback/tripcard_fallback.png'} alt="캐릭터 이미지" width={188} height={180} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-[16px] py-[10px]">
        <p className="header1 text-nt-neutral-white">{data?.data.userName}</p>
        <Link href="#">
          <Badge className="bg-nt-secondary-500 text-md text-nt-neutral-white border-0 w-[200px] h-[33px] active:bg-nt-secondary-600 active:text-nt-neutral-white hover:bg-nt-secondary-100 hover:text-nt-neutral-400">
            좋아요 갯수&nbsp;
            <span className="text-nt-primary font-semibold">{data?.data.likedSpotsCount}</span>개
          </Badge>
        </Link>
      </div>
    </>
  );
}
