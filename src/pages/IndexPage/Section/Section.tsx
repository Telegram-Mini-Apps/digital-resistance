import React, { type PropsWithChildren } from 'react';
import cn from 'classnames';

import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './Section.module.scss';

export function Section({ className, children, title }: PropsWithChildren<{
  className?: string;
  title?: string;
}>) {
  return (
    <section className={cn(className, styles.root)}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </section>
  );
}