'use client';

import { getPosts } from '@/api/posts/getPosts';
import { useSuspenseQuery } from '@tanstack/react-query';

import type { Post } from '@/api/posts/getPosts';

export default function Test() {
  const { data } = useSuspenseQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div className="p-5 border border-gray-300 mt-5">
      <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
      <p className="text-sm text-gray-500">
        Data fetched by TanStack Query. Initially hydrated from server.
      </p>
      <ul className="list-none p-0">
        {data.map(post => (
          <li key={post.id} className="mb-4 border-b border-dashed border-gray-200 pb-2">
            <h3 className="text-lg font-medium text-gray-800 mb-1">{post.title}</h3>
            <p className="text-gray-600 m-0">{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
