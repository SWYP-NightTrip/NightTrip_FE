export interface RecentPlan {
  planId: number;
  planTitle: string;
  planPhotoUrl: string;
  startDate: string;
  endDate?: string;
}

export interface UserProfile {
  userName: string;
  level: number;
  userAvatarUrl: string;
  bookmarked: number;
  liked: number;
  recentPlans: RecentPlan[];
}

export const profile: UserProfile = {
  userName: '밤여행러',
  level: 4,
  userAvatarUrl: 'https://example.com/avatars/user101.jpg',
  bookmarked: 50,
  liked: 100,
  recentPlans: [
    {
      planId: 78,
      planTitle: '부산 1박 2일 먹방여행',
      planPhotoUrl: 'https://example.com/plans/busan_food.jpg',
      startDate: '2025-06-15',
      endDate: '2025-06-15',
    },
    {
      planId: 62,
      planTitle: '강릉 경포해변 드라이브',
      planPhotoUrl: 'https://example.com/plans/gangneung_beach.jpg',
      startDate: '2025-06-15',
    },
    {
      planId: 55,
      planTitle: '서울 야경 시티투어',
      planPhotoUrl: 'https://example.com/plans/seoul_night.jpg',
      startDate: '2025-06-15',
    },
  ],
};
