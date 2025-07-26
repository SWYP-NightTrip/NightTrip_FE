import { Suspense } from 'react';

import MainPage from '@/components/pages/MainPage';

export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    </div>
  );
}
