import { Button as ShadcnButton } from '@/lib/shadcn/components/ui/button';
import { cn } from '@/lib/shadcn/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  isActive = false,
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'flex p-0 w-full h-[46px] bg-nt-primary text-nt-neutral-white hover:bg-nt-primary-400 cursor-pointer',
    'active:bg-nt-primary-600 disabled:opacity-100 disabled:bg-nt-neutral-200 disabled:text-nt-neutral-400',
    'focus-visible:border focus-visible:border-nt-primary focus-visible:ring-0 focus-visible:text-nt-primary focus-visible:bg-nt-neutral-white',
    isActive && !disabled && 'bg-nt-primary-100 text-nt-primary-600 border border-nt-primary-600',
  );

  return (
    <ShadcnButton className={cn(baseStyles, className)} disabled={disabled} {...props}>
      {children}
    </ShadcnButton>
  );
}
