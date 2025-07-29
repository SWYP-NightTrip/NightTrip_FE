import { Suspense } from 'react';
import PlanModal from '@/components/common/PlanModal';
import MainPage from '@/components/pages/MainPage';


export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PlanModal.Wrapper>
          <PlanModal.Trigger>클릭</PlanModal.Trigger>
          <PlanModal.Content title='여행 일정 추가하기'>
            <div>
              어쩌구
            </div>
            <div>
              저쩌구
            </div>
          </PlanModal.Content>
        </PlanModal.Wrapper>
        <MainPage />
      </Suspense>
    </div>
  );
}
