export const checkSession = async () => {
  try {
    const res = await fetch(`https://dev.nighttrip.co.kr/api/v1/oauth/status`, {
      credentials: 'include',
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const json = await res.json();
    
    return json.data;
  } catch {
    return null;
  }
};
