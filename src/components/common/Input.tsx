import { Input as ShadcnInput } from '@/lib/shadcn/components/ui/input';
import { cn } from '@/lib/shadcn/utils';

export default function Input({
  className,
  type,
  ...props
}: React.ComponentProps<typeof ShadcnInput>) {
  const baseStyles = cn(
    'border border-nt-neutral-250 rounded-nt-radius shadow-none px-[16px] py-[13px] h-[46px]',
    'focus-visible:border-nt-primary focus-visible:ring-transparent focus-visible:ring-0',
    'disabled:border-nt-neutral-400 disabled:bg-nt-neutral-200 disabled:placeholder-nt-neutral-400 disabled:opacity-100',
    'placeholder:text-nt-neutral-250',
  );

  return <ShadcnInput type={type} className={cn(baseStyles, className)} {...props} />;
}
