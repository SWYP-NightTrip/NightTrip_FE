interface Detail {
  spotName: string;
  address: string;
  spotImages: string[];
  checkCount: number; // 별표 옆 괄호 숫자 (리뷰 수)
  mainWeight: number; // 별점 (예: 4.5)
  subWeight: number; // 부가 점수 (예: 인기도, 추천도 등)
  category: string[];
  link: string; // 상세 페이지 링크
  spotDescription: string; // 소개 글
  telephone: string | null; // 전화번호
  latitude: number;
  longitude: number;
  detailInfos: string[]; // 상세정보
}

interface DetailResponse {
  message: string;
  data: Detail;
  timestamp: string;
}

export const mockDetailData: DetailResponse = {
  message: 'success',
  data: {
    spotName: '나이트뷰 카페',
    spotImages: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ],
    address: '서울특별시 강남구 테헤란로 123',
    checkCount: 128, // 리뷰 수
    mainWeight: 4.5, // 별점
    subWeight: 8.2, // 인기도 점수 (0-10)
    category: ['카페', '야경', '데이트', '포토스팟'],
    link: 'https://nightview-cafe.com',
    spotDescription:
      '강남의 야경을 한눈에 볼 수 있는 프리미엄 카페입니다. 30층 높이에서 바라보는 서울의 밤 풍경은 잊을 수 없는 추억을 선사합니다. 로맨틱한 분위기로 데이트 코스로도 인기가 많으며, 특히 일몰 시간대에는 예약이 필수입니다.',
    telephone: '02-1234-5678',
    latitude: 37.5665,
    longitude: 127.0018,
    detailInfos: [
      '영업시간: 10:00 - 24:00',
      '주차: 유료 (1시간 3,000원)',
      '예약: 필수 (주말)',
      '최소 주문: 음료 1잔',
      '반려동물: 동반 불가',
      '흡연: 전용 구역 있음',
      'Wi-Fi: 무료 제공',
      '콘센트: 각 테이블마다 구비',
    ],
  },
  timestamp: '2024-01-15T10:30:00Z',
};
