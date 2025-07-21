import { cn } from '@/lib/shadcn/utils';
import { Card } from '@/lib/shadcn/components/ui/card';

import type { ComponentProps } from 'react';

interface WrapperProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className, ...rest }: WrapperProps) {
  return (
    <Card className={cn('relative p-0 gap-0', className)} {...rest}>
      {children}
    </Card>
  );
}
