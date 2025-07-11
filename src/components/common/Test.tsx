'use client'; // 클라이언트 컴포넌트임을 명시

import { useQuery } from '@tanstack/react-query';

interface DataProps {
  id: string;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default function Test() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-5 border border-gray-300 mt-5">
      <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
      <p className="text-sm text-gray-500">
        Data fetched by TanStack Query. Initially hydrated from server.
      </p>
      <ul className="list-none p-0">
        {data.map((post: DataProps) => (
          <li key={post.id} className="mb-4 border-b border-dashed border-gray-200 pb-2">
            <h3 className="text-lg font-medium text-gray-800 mb-1">{post.title}</h3>
            <p className="text-gray-600 m-0">{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
