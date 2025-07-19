import { cn } from '@/lib/shadcn/utils';
import Image from 'next/image';

import type { ComponentProps } from 'react';

interface PhotoProps extends ComponentProps<'img'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

function Photo({ src, alt, width = 100, height = 100, className, ...rest }: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('w-full h-full object-cover rounded-lg', className)}
      {...rest}
    />
  );
}

export default Photo;
