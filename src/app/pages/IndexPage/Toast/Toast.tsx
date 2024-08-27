import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './Toast.module.scss';

export function Toast({ className, ...rest }: Parameters<typeof motion.div>[0]) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 'calc(-100% - 32px)', opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.35 }}
      {...rest}
      className={cn(styles.root, className)}
    />
  );
}