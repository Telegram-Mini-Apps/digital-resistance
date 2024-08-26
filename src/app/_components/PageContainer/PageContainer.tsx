import { forwardRef, PropsWithChildren } from 'react';

import styles from './PageContainer.module.scss';

export const PageContainer = forwardRef<HTMLElement, PropsWithChildren>((props, ref) => {
  return <main ref={ref} className={styles.root} {...props}/>;
});