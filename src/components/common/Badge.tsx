import { cn } from '@/lib/shadcn/utils';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Badge({ children, className, ...props }: BadgeProps) {
  const badgeClass =
    'flex items-center justify-center w-[53px] h-[28px] rounded-full bg-nt-neutral-white border border-nt-primary font-medium text-xs';

  return (
    <div className={cn(badgeClass, className)} {...props}>
      {children}
    </div>
  );
}
