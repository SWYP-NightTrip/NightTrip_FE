import { cn } from '@/lib/shadcn/utils';
import LoginButton from '@/pages/LoginPage/ui/LoginButton';
import Link from 'next/link';
import Rabbit from '@/icons/rabbit.svg';
import LoginLogo from '@/icons/login-logo.svg';
import Header from '@/pages/LoginPage/ui/header';
import Naver from '@/icons/naver.svg';
import Google from '@/icons/google.svg';
import Apple from '@/icons/apple.svg';
import Kakao from '@/icons/kakao.svg';
const socialLoginBtnClass = 'rounded-full w-[50px] h-[50px] border border-nt-neutral-250';

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Header />

      <div className="flex flex-col w-full p-3">
        <div className="flex flex-col w-full gap-4 items-center">
          <p className="header2">밤에 떠나는 여행</p>
          <LoginLogo />
        </div>
      </div>

      <Rabbit />

      <div className="flex mb-2 mt-7">
        <div className="border-[0.5px] w-[80px] my-auto border-nt-neutral-250" />
        <span className="px-3 text-sm font-medium">3초만에 로그인하기</span>
        <div className="border-[0.5px] w-[80px] my-auto border-nt-neutral-250" />
      </div>

      <div className="flex gap-4">
        <LoginButton provider="kakao" className={cn(socialLoginBtnClass, 'bg-[#FEE500]')}>
          <Kakao />
        </LoginButton>
        <LoginButton provider="naver" className={cn(socialLoginBtnClass, 'bg-[#03C75A]')}>
          <Naver />
        </LoginButton>
        <LoginButton
          provider="google"
          className={cn(socialLoginBtnClass, 'bg-[#FFFFFF] text-nt-neutral-black')}
        >
          <Google />
        </LoginButton>
        <LoginButton provider="apple" className={cn(socialLoginBtnClass, 'bg-[#000000]')}>
          <Apple className='-translate-y-0.5'/>
        </LoginButton>
      </div>

      <div className="m-10 flex flex-col gap-6 justify-center items-center font-medium text-sm">
        <div>
          <span>또는</span>
        </div>
        <div className="flex gap-8">
          <Link href="#">이메일 로그인</Link>
          <div className="border-[0.5px] h-[20px] border-nt-neutral-250" />
          <Link href="#">회원가입</Link>
        </div>
      </div>
    </div>
  );
}
