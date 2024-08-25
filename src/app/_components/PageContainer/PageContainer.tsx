import type { PropsWithChildren } from 'react';

import styles from './PageContainer.module.scss';

export function PageContainer(props: PropsWithChildren) {
  return <main className={styles.root} {...props}/>;
}