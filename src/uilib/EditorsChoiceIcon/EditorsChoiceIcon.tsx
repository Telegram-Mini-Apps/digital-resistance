import React from 'react';
import { useTranslation } from 'react-i18next'
import { Caption, ISubHeadlineProps, SubHeadline } from '../Typography/Typography'

import styles from './styles.module.scss';
import { EditorsChoice } from '../../svg/EditorsChoice';

interface IEditorsChoiceIconProps extends Partial<ISubHeadlineProps> {
    size?: 'small' | 'big';
}

export const EditorsChoiceIcon: React.FC<IEditorsChoiceIconProps> = (props) => {
    const { size = 'small' } = props;
    const {
        level = 2,
        weight= 'medium',
    } = props;
    const {t} = useTranslation();

    if (size === 'big') {
        return (
            <SubHeadline
                level={level}
                weight={weight}
                className={styles.root}
            >
                <EditorsChoice.Left
                    width={8}
                    height={18}
                />
                {t("editorsChoice")}
                <EditorsChoice.Right
                    width={8}
                    height={18}
                />
            </SubHeadline>
        )
    }

    return (
        <Caption
            level={2}
            weight={'medium'}
            className={styles.root}
        >
            <EditorsChoice.Left />
            {t("editorsChoice")}
            <EditorsChoice.Right />
        </Caption>
    )
}
