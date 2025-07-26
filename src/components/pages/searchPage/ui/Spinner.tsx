interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className = '' }: SpinnerProps) {
  return (
    <div className={`relative w-[80px] h-[80px] ${className}`}>
      {/* 배경 원 (#B5B4BA) */}
      <div className="absolute inset-0 rounded-full border-[10px] border-[#B5B4BA]"></div>

      {/* 진행 세그먼트 (#7672DA) */}
      <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-[#7672DA] animate-spin"></div>
    </div>
  );
}
