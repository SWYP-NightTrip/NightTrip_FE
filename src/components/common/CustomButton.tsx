import { Button } from '@/lib/shadcn/components/ui/button';
import { cn } from '@/lib/shadcn/utils';

import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>; // Button의 모든 속성을 가져옴 (html + custom props)

interface CustomButtonProps extends Omit<ButtonProps, 'size'> {
  size?: ButtonProps['size'] | 'xl';
}

export const CustomButton = ({ size, children, className, ...props }: CustomButtonProps) => {
  const sizeClass = size === 'xl' ? 'px-8 py-4 text-xl' : '';

  return (
    <Button
      size={size === 'xl' ? undefined : size}
      className={cn('gap-2', sizeClass, className)}
      {...props}
    >
      {children}
    </Button>
  );
};
