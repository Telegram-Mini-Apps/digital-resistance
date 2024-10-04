import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  after?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ icon, variant = 'primary', after, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(styles.root, rest.className, {
        [styles.rootPrimary]: variant === 'primary',
        [styles.rootSecondary]: variant === 'secondary',
      })}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.content}>{children}</span>}
      {after && <span className={styles.after}>{after}</span>}
    </button>
  );
}
