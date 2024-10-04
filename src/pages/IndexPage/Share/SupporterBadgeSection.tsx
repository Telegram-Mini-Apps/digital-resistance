import { useCallback } from 'react';
import { Trans } from 'react-i18next';
import mixpanel from 'mixpanel-browser';
import { openLink } from '@telegram-apps/sdk-react';

import { Section } from '../Section/Section';
import { Button } from '../../../components/Button/Button';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './Share.module.scss';

export function SupporterBadgeSection() {
  const onClick = useCallback(() => {
    openLink('https://society.ton.org/welcome/f3a9cd8209f3d40a552c9dfb6a4f6012:5f68a3c9de688097a45d67223661e944');
    mixpanel.track('claim_supporter_badge_clicked');
  }, []);

  return (
    <Section className={styles.section}>
      <div className={styles.supporterContainer}>
        <div>
          <SectionTitle>
            <Trans i18nKey="supporter_badge_block_title"/>
          </SectionTitle>
          <p className={styles.sectionFlexContainer}>
            <Trans i18nKey="supporter_badge_block_text"/>
          </p>
        </div>
        <img
          alt=""
          src={`${process.env.PUBLIC_URL}/img/supporter-badge/@1x.png`}
          srcSet={`${process.env.PUBLIC_URL}/img/supporter-badge/@2x.png 2x`}
          width="64"
          height="64"
        />
      </div>
      <div className={styles.actions}>
        <Button onClick={onClick}>
          <Trans i18nKey="supporter_badge_btn_text"/>
        </Button>
      </div>
    </Section>
  );
}