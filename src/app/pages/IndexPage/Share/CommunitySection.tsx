import { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';
import { Button } from '../Button/Button';

import styles from './Share.module.scss';

export function CommunitySection() {
  const { t } = useTranslation();
  const onClick = useCallback(() => {
    window.Telegram.WebApp.openTelegramLink('https://t.me/community_bot/join?startapp=id_4124');
  } ,[]);

  return (
    // fixme
    <Section className={styles.section} title="">
      <p>
        {/*fixme*/}
        <Trans i18nKey=""/>
      </p>
      <div className={styles.action}>
        <Button onClick={onClick}>
          {/*fixme*/}
          <Trans i18nKey=""/>
        </Button>
      </div>
    </Section>
  )
}