import classNames from 'classnames';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { useTWAPlatform } from '../../hooks';
import styles from './styles.module.scss';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'link' | 'alternative' | 'inversed' | 'context';
  disableActiveState?: boolean;
  disablePointer?: boolean;
  shine?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<IButtonProps>>(
  (props, ref) => {
    const {
      type,
      shine,
      children,
      className,
      disablePointer,
      disableActiveState,
      ...resetButtonProps
    } = props;

    const platform = useTWAPlatform();

    const buttonClassNames = classNames(
      className,
      styles.button,
      styles[`button__${type}`],
      {
        [styles['button__shine']]: shine,
        [styles['button__pointerDisabled']]: disablePointer,
        [styles['button__activeStateDisabled']]: disableActiveState,
      },
    );

    return (
      <button
        ref={ref}
        className={buttonClassNames}
        {...resetButtonProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
