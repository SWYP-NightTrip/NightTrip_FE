import { cn } from '@/lib/shadcn/utils';
import type { ComponentProps } from 'react';

interface OverlayProps extends ComponentProps<'div'> {
  className?: string;
}

export default function Overlay({ className, ...rest }: OverlayProps) {
  return <div className={cn('absolute inset-0 bg-white/20', className)} {...rest} />;
}
