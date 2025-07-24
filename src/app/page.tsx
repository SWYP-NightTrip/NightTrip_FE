import { Suspense } from 'react';
import { MainPage } from '@/pages/MainPage';
import { redirect } from 'next/navigation';
import { checkSession } from '@/lib/auth/auth';

export default async function HomePage() {
  const session = await checkSession();

  if(!session) {
    redirect('/login');
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    </div>
  );
}
