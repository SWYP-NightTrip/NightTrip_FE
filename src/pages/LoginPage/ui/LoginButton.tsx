'use client';

import Button from '@/components/common/Button';

interface LoginButtonProps {
  provider: 'kakao' | 'naver' | 'google' | 'apple';
  children: React.ReactNode;
  className?: string;
}

const handleLogin = (provider: LoginButtonProps['provider']) => {
  console.log(`${provider} 로그인 클릭!`);
};

export default function LoginButton({ provider, children, className }: LoginButtonProps) {
  return (
    <Button className={className} onClick={() => handleLogin(provider)}>
      {children}
    </Button>
  );
}
