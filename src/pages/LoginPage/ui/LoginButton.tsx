'use client';

import Button from '@/components/common/Button';
import { cn } from '@/lib/shadcn/utils';
import { useRouter } from 'next/navigation'; // next/navigation에서 useRouter를 임포트

interface LoginButtonProps {
  provider: 'kakao' | 'naver' | 'google' | 'apple';
  children: React.ReactNode;
  className?: string;
}

const socialLoginBtnClass = 'rounded-full w-[50px] h-[50px] border border-nt-neutral-250';

export default function LoginButton({ provider, children, className }: LoginButtonProps) {
  const router = useRouter();

  const handleLogin = (provider: LoginButtonProps['provider']) => {
    router.push(`https://dev.nighttrip.co.kr/oauth2/authorization/${provider}`);
  };

  return (
    <Button className={cn(socialLoginBtnClass, className)} onClick={() => handleLogin(provider)}>
      {children}
    </Button>
  );
}