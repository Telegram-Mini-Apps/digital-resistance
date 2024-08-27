import React, { useMemo } from 'react';
import cn from 'classnames';
import { Trans } from 'react-i18next';

import { formatNumber } from '../../../../utils/formatNumber';

import { Section } from '../Section/Section';

import styles from './Progress.module.scss';

export function Progress({ current }: { current: number }) {
  const targetCount = useMemo(() => {
    return [
      1_000_000,
      5_000_000,
      20_000_000,
      50_000_000,
      100_000_000,
      500_000_000,
    ].find(m => m > current) || current;
  }, [current]);

  return (
    <Section className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.barThumb} style={{ width: `${current / targetCount * 100}%` }}/>
      </div>
      <div className={styles.captions}>
        <div className={styles.item}>
          <div className={styles.itemTitle}>{formatNumber(current)}</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'signatures'}/>
          </div>
        </div>

        <div className={cn(styles.item, styles.itemRight)}>
          <div className={styles.itemTitle}>{formatNumber(targetCount)}</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'next_goal'}/>
          </div>
        </div>
      </div>
    </Section>
  );
}