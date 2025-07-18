import { cn } from '@/lib/shadcn/utils';

import Nav from '@/components/layout/Nav';

import type { ComponentProps } from 'react';

type BottomNavProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'footer'>;

export default function BottomNav({ children, className, ...rest }: BottomNavProps) {
  return (
    <Nav as="footer" className={cn('fixed bottom-0 left-0 z-100 w-full', className)} {...rest}>
      {children}
    </Nav>
  );
}
