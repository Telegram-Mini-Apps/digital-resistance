import React, { useEffect, useLayoutEffect, useState } from 'react'
import { AlertData } from '../../../types/entities';
import { useCloudStorage } from '../../hooks/hooks'
import { CrossIcon } from '../../svg/CrossIcon'
import { ShieldIcon } from '../../svg/ShieldIcon';
import { Caption, SubHeadline } from '../Typography/Typography';
import styles from './syles.module.scss';

interface IAlertProps {
    alert?: AlertData | null;
    onClose: () => void;
}

export const Alert: React.FC<IAlertProps> = (props) => {
    const handleClose = () => {
        props.onClose()
    }

    return props.alert ? (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <ShieldIcon />
                </div>
                <div className={styles.body}>
                    <SubHeadline weight={"semi-bold"} level={1} className={styles.title}>
                        {props.alert?.attributes?.title}
                    </SubHeadline>
                    <Caption level={1} weight={"regular"} className={styles.caption}>
                        {props.alert?.attributes?.content}
                    </Caption>
                </div>
                <div className={styles.crossIconContainer} onClick={handleClose}>
                    <CrossIcon width={18} height={18}/>
                </div>
            </div>
        </div>
    ) : null;
}
