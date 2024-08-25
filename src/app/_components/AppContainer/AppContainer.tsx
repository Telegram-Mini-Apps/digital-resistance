import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const AppContainer: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { children, ...rest } = props;

    return (
        <div className={styles.root} {...rest}>
            {props.children}
        </div>
    )
}

export const SectionContainer: React.FC<PropsWithChildren> = (props) => {
    return (
        <div className={styles.section}>
            {props.children}
        </div>
    )
}

export const PadlessSectionContainer: React.FC<PropsWithChildren> = (props) => {
    return (
        <div className={styles.padllessSectionContainer}>
            {props.children}
        </div>
    )
}

