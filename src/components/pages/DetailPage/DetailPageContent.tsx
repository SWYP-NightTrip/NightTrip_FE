'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import TopNav from '@/components/common/TopNav';

import BackIcon from '@/icons/back.svg';
import AddressIcon from '@/icons/address.svg';
import PhoneIcon from '@/icons/phone.svg';
import NightTripTextIcon from '@/icons/nighttrip_text.svg';

import Divider from '@/components/pages/DetailPage/ui/Divider';
import Map from '@/components/pages/DetailPage/ui/map';
import ImageCarousel from '@/components/pages/DetailPage/ui/ImageCarousel';
import Footer from '@/components/common/footer';

import StarIcon from '@/icons/star.svg';
import FillHeartIcon from '@/icons/fill_like.svg';
import EmptyHeartIcon from '@/icons/empty_like.svg';

import { useGetDetailSpot } from '@/components/pages/DetailPage/detail/entities';

import { useLike } from '@/components/pages/DetailPage/like/entities';

interface DetailPageContentProps {
  id: string;
}

export default function DetailPageContent({ id }: DetailPageContentProps) {
  const { data: detailData } = useGetDetailSpot(id);

  const { toggleLike } = useLike(id);

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
        <p className="mx-auto header2">{detailData.data.spotName}</p>
        <div />
      </TopNav>
      <div className="py-5 px-4">
        <div className="relative">
          {detailData.data.spotImages.length > 0 ? (
            <ImageCarousel
              images={detailData.data.spotImages}
              spotName={detailData.data.spotName}
            />
          ) : (
            <div className="w-full h-[200px] bg-nt-neutral-100 flex items-center justify-center flex-col">
              <Image
                src={'/images/rabbit.png'}
                width={100}
                height={100}
                alt="나이트 트립 토끼 로고"
              />
              <NightTripTextIcon />
            </div>
          )}
          <button className="absolute top-4 right-4 cursor-pointer" onClick={toggleLike}>
            {detailData.data.isLiked ? <FillHeartIcon /> : <EmptyHeartIcon />}
          </button>
        </div>
      </div>
      <div className="px-4">
        <div className="p-2.5">
          <div className="flex gap-2.5">
            <div className="header2 flex-1 w-[224px] h-[28px]">{detailData.data.spotName}</div>
            <div className="flex items-center mb-1">
              <StarIcon />
              <span className="text-xs text-nt-neutral-400 leading-4 tracking-[0.06px]">
                {detailData.data.starAverage} ({detailData.data.starCountSum})
              </span>
            </div>
          </div>

          {/* 주소, 전화번호 카테고리 */}
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex gap-2">
              <div className="mt-1">
                <AddressIcon />
              </div>
              <span className="body1 flex-1">{detailData.data.address}</span>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon />
              <span className="body1">
                {detailData.data.telephone === 'NaN' || detailData.data.telephone === null
                  ? '없음'
                  : detailData.data.telephone}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-1.5">
          <div className="flex gap-2.5">
            <div className="body4 text-nt-neutral-400 px-2 py-1.5 bg-nt-neutral-100 rounded-full">
              {detailData.data.category}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Divider />
      </div>
      {/* 상세정보 */}
      <div className="mt-5">
        <div className="flex flex-col gap-0.5 px-4">
          <div className="header3 text-nt-neutral-900">상세정보</div>
          {detailData.data.spotDetails.length === 0 && '없음'}
          {detailData.data.spotDetails.map(detail => (
            <div key={detail.type} className="flex flex-col gap-1.5 px-4 py-2.5">
              <span className="body2 text-nt-neutral-400">{detail.label}</span>
            </div>
          ))}
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
          <Map latitude={detailData.data.latitude} longitude={detailData.data.longitude} />
        </div>
        <Divider />
      </div>
      {/* 소개글 */}
      <div className="px-4 mt-5">
        <div className="header3 text-nt-neutral-900">소개글</div>
        <div className="mt-3">
          <div className="body2 text-nt-neutral-400">
            {detailData.data.spotDescription === 'NaN' || detailData.data.spotDescription === null
              ? '없음'
              : detailData.data.spotDescription}
          </div>
        </div>
      </div>
      <Footer />
      <div className="w-full h-[100px]"></div> {/* Footer 높이만큼 빈 공간 추가 */}
    </>
  );
}
