import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

export function Header() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.imgContainer}>
                <img
                    alt="digital-resistance"
                    src="/img/dr/dark@1x.png"
                    srcSet="/img/dr/dark@2x.png 2x"
                />
            </div>
            <div className={styles.hashTags}>
                <span>#DigitalResistance</span>
                <span>#FreeDurov</span>
            </div>
            <h1 className={styles.title}>
                {t('we_demand_release')}
            </h1>
        </>
    );
}