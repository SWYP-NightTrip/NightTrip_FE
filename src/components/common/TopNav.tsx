import { cn } from '@/lib/shadcn/utils';

import Nav from '@/components/layout/Nav';

import type { ComponentProps } from 'react';

type TopNavProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'header'>;

export default function TopNav({ children, className, ...rest }: TopNavProps) {
  return (
    <Nav as="header" className={cn('w-full', className)} {...rest}>
      {children}
    </Nav>
  );
}
