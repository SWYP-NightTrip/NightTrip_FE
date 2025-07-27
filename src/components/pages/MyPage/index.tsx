import Badge from '@/components/common/Badge';
import Footer from '@/components/pages/MyPage/ui/footer';
import Header from '@/components/pages/MyPage/ui/header';
import Rabbit from '@/icons/rabbit.svg';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/images/calendar.png';

export default function MyPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center items-center h-[217px]">
        <Rabbit className="scale-166" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-[16px] py-[10px]">
        <p className="header1">별명 / 이름</p>
        <Badge className="bg-nt-secondary-500 text-nt-neutral-white border-0">Lv.4</Badge>
      </div>
      <div className="flex justify-center items-center gap-14 py-5 px-2.5">
        <div className="flex flex-col items-center gap-2.5">
          <p className="header4 text-nt-neutral-400">북마크</p>
          <p className="header1">50개</p>
        </div>
        <div className="border-r-1 border-nt-neutral-250 h-[51px]" />
        <div className="flex flex-col items-center gap-2.5">
          <p className="header4 text-nt-neutral-400">좋아요</p>
          <p className="header1">50개</p>
        </div>
      </div>

      <div className="border-1 my-4" />

      <div className='flex flex-col mt-2 mx-3.5 '>
        <div className='flex flex-col'>
          <p className='header3'>나의 여행</p>
          <p className='body2 text-nt-neutral-400'>현재 계획하고 있는 여행을 더욱 빠르게 만나보세요!</p>
        </div>
        <div className='flex py-2.5 px-4 rounded-nt-radius bg-nt-neutral-50 gap-1 h-[79px] my-2.5'>
          <div className='flex items-center justify-center'>
            <Image src={icon} alt="아이콘" width={50} height={50} />
          </div>
          
          <div className='flex flex-col w-full justify-center'>
            <div className='flex justify-between items-center'>
              <p className='header4'>런던 밤거리 여행</p>
              <Link href='#' className='body5 text-nt-neutral-400'>자세히보기</Link>
            </div>
            <div className='flex items-center gap-2 body2 text-nt-neutral-400'>
              <span>Day-7</span>
              <div className='border-r-1 h-[12px]'/>
              <span>7/14(수) - 7/30(월)</span>
              <div className='border-r-1 h-[12px]'/>
              <span>6박 7일</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="w-full h-[100px]"></div>
    </div>
  );
}
