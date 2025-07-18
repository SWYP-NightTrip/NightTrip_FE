import { Button as ShadcnButton } from '@/lib/shadcn/components/ui/button';
import { cn } from '@/lib/shadcn/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'round' | 'square';
  size?: 'md' | 'icon-sm' | 'icon-md';
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'default',
  size = 'md',
  isActive = false,
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'flex bg-nt-primary text-nt-neutral-white hover:bg-nt-primary-400 cursor-pointer',
    'active:bg-nt-primary-600 disabled:opacity-100 disabled:bg-nt-neutral-200 disabled:text-nt-neutral-400',
    'focus-visible:border focus-visible:border-nt-primary focus-visible:ring-0 focus-visible:text-nt-primary focus-visible:bg-nt-neutral-white',
    isActive && !disabled && 'bg-nt-primary-100 text-nt-primary-600 border border-nt-primary-600'
  );

  const getVariantStyles = () => {
    switch (variant) {
      case 'default': // 기본 버튼 + 소셜 로그인(박스형)
        return 'rounded-nt-radius w-[343px]';
      case 'round': // 버튼-원형
        return 'bg-nt-primary-100 rounded-full aspect-square';
      case 'square': // 버튼-사각형
        return 'bg-nt-primary-100 rounded-none aspect-square';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'md': // 기본 버튼
        return 'h-[var(--nt-btn-h)]';
      case 'icon-sm': // 소셜 로그인(원형)
        return 'h-[50px]';
      case 'icon-md': // 버튼-원형 & 버튼-사각형
        return 'h-[60px]';
    }
  };

  return (
    <ShadcnButton
      className={cn(baseStyles, getVariantStyles(), getSizeStyles(), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}
