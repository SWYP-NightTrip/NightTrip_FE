import { cn } from '@/lib/shadcn/utils';

import Nav from '@/components/layout/Nav';

import type { TagProps } from '@/types/components';

type BottomNavProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BottomNav({
  children,
  className,
  ...rest
}: TagProps<'footer', BottomNavProps>) {
  return (
    <Nav
      as="footer"
      className={cn('fixed bottom-0 z-50 h-[64px] bg-white border-gray-200', className)}
      {...rest}
    >
      {children}
    </Nav>
  );
}
