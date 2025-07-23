interface RecommendedSpot {
  id: number;
  name: string;
  stars: string;
  reviewCount: number;
  location: string;
  price: string;
  imgUrl: string;
}

export const recommendedSpots: RecommendedSpot[] = [
  {
    id: 1,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    price: '100,000원 / 박',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    price: '100,000원 / 박',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: '캠핑장명',
    stars: '4.5',
    reviewCount: 100,
    location: '한국 • 강원도',
    price: '100,000원 / 박',
    imgUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];
