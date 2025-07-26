import icon from '@/images/ex_icon.png';

import type { StaticImageData } from 'next/image';

// 임시 타입
interface PartnershipServiceCategory {
  id: number;
  icon: StaticImageData | string;
  label: string;
}

export const partnershipServiceCategories: PartnershipServiceCategory[] = [
  { id: 1, icon: icon, label: '교통권' },
  { id: 2, icon: icon, label: '숙박예약' },
  { id: 3, icon: icon, label: '투어티켓' },
  { id: 4, icon: icon, label: '렌터카' },
  { id: 5, icon: icon, label: '더보기' },
  { id: 6, icon: icon, label: '더' },
  { id: 7, icon: icon, label: '더보' },
];
