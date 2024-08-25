import classNames from 'classnames'
import React from 'react';
import { Ripple } from '../Ripple/Ripple';
import styles from './styles.module.scss';

interface IActionProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode,
    onClick?: () => void,
}

export const Action: React.FC<IActionProps> = React.memo((props) => {
    return (
        <Ripple
            className={classNames(styles.ripple, props.className)}
            onClick={props.onClick}
        >
            <div className={styles.root}>
                {props.icon && props.icon}
                {props.children}
            </div>
        </Ripple>
    );
}, () => true);

Action.displayName = 'Action';
