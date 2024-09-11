import React, { type PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './SectionTitle.module.scss';

export function SectionTitle({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <h2 className={cn(styles.root, className)}>{children}</h2>;
}