import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  after?: ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ icon, variant = 'primary', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(styles.root, rest.className, {
        [styles.rootPrimary]: variant === 'primary',
        [styles.rootSecondary]: variant === 'secondary',
      })}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.content}>{rest.children}</span>
      {rest.loading && (
        <div className={styles.spinner}>
          <span className={styles.spinnerThumb}/>
        </div>
      )}
      {rest.after && <span className={styles.after}>{rest.after}</span>}
    </button>
  );
}