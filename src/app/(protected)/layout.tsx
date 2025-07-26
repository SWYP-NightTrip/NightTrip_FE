import { checkSession } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await checkSession();

  if (!session?.isLoggedIn) {
    redirect('/login');
  }

  return <>{children}</>;
}
