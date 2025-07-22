import { cn } from '@/lib/shadcn/utils';

export default function Icon({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('absolute right-0 top-1/2 -translate-y-1/2 mx-[16px]', className)}
      {...props}
    >
      {children}
    </div>
  );
}
