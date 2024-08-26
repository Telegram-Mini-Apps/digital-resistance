import React from 'react';
import cn from 'classnames';

import { Section } from '../Section/Section';

import styles from './Progress.module.scss';
import { Trans } from 'react-i18next';

export function Progress() {
  return (
    <Section className={styles.root}>
      <div className={styles.bar}>
        {/*fixme*/}
        <div className={styles.barThumb} style={{ width: '64%' }}/>
      </div>
      <div className={styles.captions}>
        <div className={styles.item}>
          <div className={styles.itemTitle}>876,543</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'signatures'}/>
          </div>
        </div>

        <div className={cn(styles.item, styles.itemRight)}>
          <div className={styles.itemTitle}>1,000,000</div>
          <div className={styles.itemSubtitle}>
            <Trans i18nKey={'next_goal'}/>
          </div>
        </div>
      </div>
    </Section>
  );
}