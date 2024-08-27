import React, { type HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Callout.module.scss';

export function Callout(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn(styles.root, props.className)}/>;
}