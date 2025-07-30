interface RecommendedSpot {
  id: number;
  name: string;
  stars: string;
  reviewCount: number;
  location: string;
  imgUrl: string;
}

export const recommendedSpots: RecommendedSpot[] = [
  {
    id: 1,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

import icon from '@/images/ex_icon.png';

import type { StaticImageData } from 'next/image';

// 임시 타입
interface PartnershipServiceCategory {
  id: number;
  imgUrl: StaticImageData | string;
  label: string;
}

export const partnership: PartnershipServiceCategory[] = [
  { id: 1, imgUrl: icon, label: '교통권' },
  { id: 2, imgUrl: icon, label: '숙박예약' },
  { id: 3, imgUrl: icon, label: '투어티켓' },
  { id: 4, imgUrl: icon, label: '렌터카' },
  { id: 5, imgUrl: icon, label: '더보기' },
  { id: 6, imgUrl: icon, label: '더' },
  { id: 7, imgUrl: icon, label: '더보' },
];
