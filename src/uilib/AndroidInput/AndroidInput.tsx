'use client';

import classNames from 'classnames';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { AndroidSearchIcon } from '../../svg/AndroidSearchIcon';
import { ArrowIcon } from '../../svg/ArrowIcon';
import { Ripple } from '../Ripple/Ripple';
import typography from '../Typography/styles.module.scss';
import styles from './styles.module.scss';

interface IAndroidInputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  placeholder?: string;
  hint?: React.ReactElement;
  value?: string;
  isActive?: boolean;
  handleCancel?: React.EventHandler<any>;
}

export const AndroidInput = React.forwardRef<HTMLInputElement, PropsWithChildren<IAndroidInputProps>>(
  (props, ref) => {
    const {
      value,
      icon,
      className,
      hint,
      children,
      placeholder,
      ...restInputProps
    } = props;

    const inputStyles = classNames(
      styles.input,
      typography['callout'],
      typography['fontWeightRegular'],
      styles.iconIncluded,
    );

    return (
      <label className={styles.root}>
        <div className={styles.iconContainer}>
          <AndroidSearchIcon
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
        <input
          placeholder={placeholder}
          className={inputStyles}
          value={value}
          {...restInputProps}
          ref={ref}
          autoComplete="off"
          enterKeyHint="search"
        />
        {children}
      </label>
    );
  },
);

AndroidInput.displayName = 'AndroidInput';
