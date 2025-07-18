import { cn } from '@/lib/shadcn/utils';

import Nav from '@/components/layout/Nav';

import type { TagProps } from '@/types/components';

type TopNavProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TopNav({ children, className, ...rest }: TagProps<'header', TopNavProps>) {
  return (
    <Nav as="header" className={cn('w-full', className)} {...rest}>
      {children}
    </Nav>
  );
}
