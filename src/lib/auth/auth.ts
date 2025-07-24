export const checkSession =  async () => {
  const res = await fetch(`https://dev.nighttrip.co.kr/api/v1/oauth/status`, {
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) return null;

  return res.json();
}