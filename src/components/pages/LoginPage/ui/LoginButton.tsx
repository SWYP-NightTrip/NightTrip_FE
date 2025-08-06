'use client';

import { useRouter } from 'next/navigation'; // next/navigation에서 useRouter를 임포트

import { cn } from '@/lib/shadcn/utils';

import { API_DOMAIN_URL } from '@/utils/constant/url';

import Button from '@/components/common/Button';

interface LoginButtonProps {
  provider: 'kakao' | 'naver' | 'google' | 'apple';
  children: React.ReactNode;
  className?: string;
}

const socialLoginBtnClass = 'rounded-full w-[50px] h-[50px] border border-nt-neutral-250';

export default function LoginButton({ provider, children, className }: LoginButtonProps) {
  const router = useRouter();

  const handleLogin = (provider: LoginButtonProps['provider']) => {
    router.push(`${API_DOMAIN_URL}/oauth2/authorization/${provider}`);
  };

  return (
    <Button className={cn(socialLoginBtnClass, className)} onClick={() => handleLogin(provider)}>
      {children}
    </Button>
  );
}
