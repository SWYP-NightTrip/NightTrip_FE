export type Post = {
  id: string;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) throw new Error('Failed to fetch posts');

  return res.json();
}
