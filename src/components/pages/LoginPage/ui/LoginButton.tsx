'use client';

import Button from '@/components/common/Button';
import { cn } from '@/lib/shadcn/utils';

interface LoginButtonProps {
  provider: 'kakao' | 'naver' | 'google' | 'apple';
  children: React.ReactNode;
  className?: string;
}

const socialLoginBtnClass = 'rounded-full w-[50px] h-[50px] border border-nt-neutral-250';

const handleLogin = (provider: LoginButtonProps['provider']) => {
  console.log(`${provider} 로그인 클릭!`);
};

export default function LoginButton({ provider, children, className }: LoginButtonProps) {
  return (
    <Button className={cn(socialLoginBtnClass, className)} onClick={() => handleLogin(provider)}>
      {children}
    </Button>
  );
}
