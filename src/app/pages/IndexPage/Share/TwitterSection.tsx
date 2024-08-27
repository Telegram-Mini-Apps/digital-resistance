import { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Callout } from '../Callout/Callout';
import { Button } from '../Button/Button';
import { Section } from '../Section/Section';

import styles from './Share.module.scss';
import { TgLink } from '../TgLink/TgLink';

export function TwitterSection({ appUrl }: { appUrl: string }) {
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    window.Telegram.WebApp.openLink(
      `https://x.com/intent/post?${new URLSearchParams([
        [
          'text',
          `${t('we_demand_release')} ${appUrl}`,
        ],
        ['url', appUrl],
      ]).toString()}`,
    );
  }, [appUrl]);

  return (
    <Section className={styles.section} title={t('repost_tweet')}>
      <p><Trans i18nKey="repost_tweet_cta"/></p>
      <div className={styles.actions}>
        <Callout className={styles.action}>
          <div className={styles.twCalloutHeader}>

          </div>
          <p className={styles.twCalloutText}>
            Today, we stand with Pavel Durov. Sign the Open Letter in his support.{' '}
            <TgLink href={appUrl}>
              t.me/tgresistancebot/letter
            </TgLink>
          </p>
        </Callout>
        <Button
          className={styles.action}
          after={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                fill="#fff"
                d="M17.217 3.865h2.76l-6.03 6.892 7.094 9.378h-5.555l-4.35-5.688-4.978 5.688H3.396l6.45-7.372L3.04 3.866h5.695l3.932 5.199zm-.97 14.618h1.53L7.905 5.43H6.264z"
              />
            </svg>
          }
          onClick={onClick}
        >
          {/*fixme*/}
        </Button>
      </div>
    </Section>
  );
}
