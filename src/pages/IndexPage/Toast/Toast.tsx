import React, { type CSSProperties, type ReactNode } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './Toast.module.scss';

export function Toast({ className, children, ...rest }: {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 'calc(-100% - 32px)', opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.35 }}
      {...rest}
      className={cn(styles.root, className)}
    >
      <div className={styles.inner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m5.183-15.083a.8.8 0 1 0-1.366-.834l-4.932 8.07-2.783-3.18a.8.8 0 0 0-1.204 1.054l3.5 4a.8.8 0 0 0 1.285-.11z"
            clipRule="evenodd"
          />
        </svg>
        {children}
      </div>
    </motion.div>
  );
}