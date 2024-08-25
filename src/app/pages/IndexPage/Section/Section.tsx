import React, { type PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Section.module.scss';

export function Section({ className, children, title }: PropsWithChildren<{
    className?: string;
    title?: string;
}>) {
    return (
        <section className={cn(className, styles.root)}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
        </section>
    );
}