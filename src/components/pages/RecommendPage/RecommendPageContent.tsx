'use client';

import Header from '@/components/pages/RecommendPage/ui/header';

import NightPopularSpot from '@/components/pages/MainPage/popular';
import NightRecommendCategory from '@/components/pages/MainPage/category';
import NightRandomRecommendCategory from '@/components/pages/RecommendPage/random-category';

export default function RecommendPageContent() {

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <NightPopularSpot />
      <NightRecommendCategory />
      <NightRandomRecommendCategory />
    </div>
  );
}
