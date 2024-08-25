'use client';

import classNames from 'classnames';
import React, { HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { useTWAPlatform } from '../../hooks';
import styles from './styles.module.scss';
import useRipple from './useRipple';

interface IRippleProps extends HTMLAttributes<HTMLDivElement> {
}

export const Ripple: React.FC<PropsWithChildren<IRippleProps>> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const platform = useTWAPlatform();
  const ripples = useRipple(rootRef, platform);

  const {
    className,
    ...restProps
  } = props;

  const rootClassNames = classNames(
    {
      [styles.tapHighLight]: platform !== 'android',
    },
    props.className,
    styles.rippleContainer,
  );

  return (
    <div
      className={rootClassNames}
      ref={rootRef}
      {...restProps}
    >
      {ripples}
      {props.children}
    </div>
  );
};
