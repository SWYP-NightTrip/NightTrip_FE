import { cn } from '@/lib/shadcn/utils';

import Nav from '@/components/layout/Nav';

interface TopNavProps {
  children: React.ReactNode;
  className?: string;
}

export default function TopNav({ children, className }: TopNavProps) {
  return (
    <Nav as="header" className={cn('w-full', className)}>
      {children}
    </Nav>
  );
}
