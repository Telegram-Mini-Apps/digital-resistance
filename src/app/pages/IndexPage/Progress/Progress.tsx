import React, { useCallback } from 'react';
import cn from 'classnames';

import { Section } from '../Section/Section';

import styles from './Progress.module.scss';
import { Trans } from 'react-i18next';

export function Progress({ current, next }: { current: number; next: number }) {
  const formatNumber = useCallback((num: number) => {
    return num.toLocaleString('en-US');
  }, []);

  return (
    <Section className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.barThumb} style={{ width: `${current / next * 100}%` }}/>
      </div>
      <div className={styles.captions}>
        <div className={styles.item}>
          <div className={styles.itemTitle}>{formatNumber(current)}</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'signatures'}/>
          </div>
        </div>

        <div className={cn(styles.item, styles.itemRight)}>
          <div className={styles.itemTitle}>{formatNumber(next)}</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'next_goal'}/>
          </div>
        </div>
      </div>
    </Section>
  );
}