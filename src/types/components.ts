import type { ComponentProps, ElementType } from 'react';

export type TagProps<Tag extends ElementType, Props> = ComponentProps<Tag> & Props;

export type PolymorphicProps<Tag extends ElementType, Props> = {
  as?: Tag;
} & TagProps<Tag, Props>;
