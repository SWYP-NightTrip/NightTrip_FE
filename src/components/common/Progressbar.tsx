import { cn } from '@/lib/shadcn/utils';

import type { ComponentProps } from 'react';

interface ProgressBarProps extends ComponentProps<'div'> {
  percent: number;
  className?: string;
}

export default function Progressbar({ percent, className, ...rest }: ProgressBarProps) {
  const clampedPercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div
      className={cn(
        'relative',
        'w-full rounded-full overflow-hidden',
        'h-2.5',
        'nt-gradient-primary-to-secondary',
        className,
      )}
      {...rest}
    >
      <div
        className={cn('w-full h-full bg-nt-neutral-250')}
        style={{
          position: 'absolute',
          left: `${clampedPercent}%`,
        }}
      />
    </div>
  );
}
