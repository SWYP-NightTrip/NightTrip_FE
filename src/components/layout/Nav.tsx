import { Children } from 'react';

import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib/shadcn/utils';

export type PolymorphicProps<T extends ElementType, P> = {
  as?: T;
} & P &
  ComponentProps<T>;

const GRID_CLASSES = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
  'grid-cols-11',
  'grid-cols-12',
];

interface NavProps {
  children: React.ReactNode;
  className?: string;
}

export default function Nav<T extends ElementType = 'nav'>({
  tag,
  children,
  className,
}: PolymorphicProps<T, NavProps>) {
  const Comp = tag ?? 'nav';

  const childrenArray = Children.toArray(children);
  const gridClass = GRID_CLASSES[childrenArray.length - 1] || 'grid-cols-1';

  if (childrenArray.length > 12) {
    throw new Error('TopNav 컴포넌트는 최대 12개의 자식 요소만 허용합니다.');
  }

  return <Comp className={cn(`grid ${gridClass} items-center`, className)}>{children}</Comp>;
}
