import { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import mixpanel from 'mixpanel-browser';
import { openTelegramLink } from '@telegram-apps/sdk-react';

import { Section } from '../Section/Section';
import { Button } from '../../../components/Button/Button';

import styles from './Share.module.scss';

export function CommunitySection() {
  const { t } = useTranslation();
  const onClick = useCallback(() => {
    openTelegramLink('https://t.me/community_bot/join?startapp=id_4124');
    mixpanel.track('community_bot_opened');
  } ,[]);

  return (
    <Section className={styles.section} title={t('quest_block_title')}>
      <p>
        <Trans i18nKey="quest_block_text"/>
      </p>
      <div className={styles.actions}>
        <Button onClick={onClick}>
          <Trans i18nKey="quest_block_btn"/>
        </Button>
      </div>
    </Section>
  )
}