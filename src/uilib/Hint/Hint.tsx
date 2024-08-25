import classNames from 'classnames';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Caption } from '../Typography/Typography';
import styles from './style.module.scss';

interface IHintProps extends HTMLAttributes<HTMLDivElement> {
}

export const Hint: React.FC<PropsWithChildren<IHintProps>> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(styles.root, className)}>
      <Caption
        weight={'medium'}
        level={2}
        className={styles.caption}
      >
        {children}
      </Caption>
    </div>
  );
};
