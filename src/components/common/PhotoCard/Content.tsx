import { cn } from '@/lib/shadcn/utils';

import { CardContent } from '@/lib/shadcn/components/ui/card';

import type { ComponentProps } from 'react';

interface CardContentProps extends ComponentProps<'div'> {
  className?: string;
}

export default function Content({ className, ...rest }: CardContentProps) {
  return <CardContent className={cn('p-0', className)} {...rest} />;
}
