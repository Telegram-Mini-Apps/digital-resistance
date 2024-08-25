"use client";

import classNames from 'classnames';
import React, { HTMLAttributes, PropsWithChildren } from 'react'
import typography from '../Typography/styles.module.scss';
import styles from './styles.module.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    icon?: React.ReactElement;
    placeholder?: string;
    hint?: React.ReactElement;
    value?: string;
}
export const Input = React.forwardRef<HTMLInputElement, PropsWithChildren<IInputProps>>(
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
            icon && styles.iconIncluded,
            props.className,
        );

        return (
            <label className={styles.root}>
                {icon && React.cloneElement(icon, { className: styles.icon})}
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
    }
)

Input.displayName = 'Input';
