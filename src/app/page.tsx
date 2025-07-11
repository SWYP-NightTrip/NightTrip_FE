import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import Test from '@/components/common/Test'; // 클라이언트 컴포넌트

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function HomePage() {
  const queryClient = new QueryClient();

  // 서버에서 데이터 프리페칭하여 tanstack 캐시에 넣어줌
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    // HydrationBoundary를 통해 프리패칭한 데이터 + HTML 작업
    <div>
      <h1>Welcome to Next.js with TanStack Query SSR!</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Test />
      </HydrationBoundary>
      {/* <Posts /> */}
    </div>
  );
}