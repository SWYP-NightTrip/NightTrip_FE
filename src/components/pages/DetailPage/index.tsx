'use client';

import { useRouter } from 'next/navigation';

import TopNav from '@/components/common/TopNav';

import BackIcon from '@/icons/back.svg';
import AddressIcon from '@/icons/address.svg';
import PhoneIcon from '@/icons/phone.svg';

import Divider from '@/components/pages/DetailPage/ui/Divider';
import Map from '@/components/pages/DetailPage/ui/map';
import ImageCarousel from '@/components/pages/DetailPage/ui/ImageCarousel';
import Footer from '@/components/common/footer';

import { mockDetailData } from '@/components/pages/DetailPage/entities';

interface DetailPageProps {
  id?: string;
}

export default function DetailPage({ id }: DetailPageProps) {
  console.log(id, 'id'); // 라우팅 할 때 쓰임

  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <TopNav>
        <button
          onClick={handleBackClick}
          className="w-[42px] h-[42px] bg-nt-white active:bg-nt-primary-50 p-2 rounded-nt-radius"
        >
          <BackIcon />
        </button>
        <p className="mx-auto header2">{mockDetailData.data.spotName}</p>
        <div />
      </TopNav>
      <ImageCarousel
        images={mockDetailData.data.spotImages}
        spotName={mockDetailData.data.spotName}
      />
      <div className="px-4">
        <div className="p-2.5">
          <div className="flex gap-2.5">
            <div className="header2 flex-1 w-[224px] h-[28px]">{mockDetailData.data.spotName}</div>
            {/* <div className="flex items-center mb-1"></div> */}
          </div>

          {/* 주소, 전화번호 카테고리 */}
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex gap-2 items-center">
              <AddressIcon />
              <span className="body1 flex-1">{mockDetailData.data.address}</span>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon />
              <span className="body1">{mockDetailData.data.telephone || '등록된 번호 없음'}</span>
            </div>
          </div>
        </div>
        <div className="mt-1.5">
          <div className="flex gap-2.5">
            {mockDetailData.data.category.map(category => (
              <div
                key={category}
                className="body4 text-nt-neutral-400 px-2 py-1.5 bg-nt-neutral-100 rounded-full"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Divider />
      </div>
      {/* 위치 */}
      <div className="mt-5">
        <div className="flex flex-col gap-0.5 px-4">
          <div className="header3 text-nt-neutral-900">위치</div>
          <div className="body2 text-nt-neutral-400">정확한 위치를 확인해보세요.</div>
        </div>
        <div className="mt-2.5">
          <Map latitude={mockDetailData.data.latitude} longitude={mockDetailData.data.longitude} />
        </div>
        <Divider />
      </div>
      {/* 소개글 */}
      <div className="px-4 mt-5">
        <div className="header3 text-nt-neutral-900">소개글</div>
        <div className="mt-3">
          <div className="body2 text-nt-neutral-400">{mockDetailData.data.spotDescription}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
