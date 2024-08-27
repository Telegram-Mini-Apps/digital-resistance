import { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import mixpanel from 'mixpanel-browser';

import { Callout } from '../Callout/Callout';
import { Button } from '../Button/Button';
import { Section } from '../Section/Section';
import { ExternalLink } from '../ExternalLink/ExternalLink';

import styles from './Share.module.scss';

export function TwitterSection() {
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    window.Telegram.WebApp.openLink('https://x.com/ton_society/status/1828446248841441467');
    mixpanel.track('twitter_shared');
  }, []);

  return (
    <Section className={styles.section} title={t('repost_tweet')}>
      <p><Trans i18nKey="repost_tweet_cta"/></p>
      <div className={styles.actions}>
        <Callout className={cn(styles.action, styles.twCallout)}>
          <div className={styles.twCalloutHeader}>
            <img
              className={styles.twCalloutUserImage}
              width="28"
              height="28"
              alt="ton-society"
              src="/img/ton-society/@1x.png"
              srcSet="/img/ton-society/@2x.png 2x"
            />
            <span className={styles.twCalloutUser}>
              TON Society
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
              <g clipPath="url(#a)">
                <path
                  fill="#248BDA"
                  d="M8.014 1.055a1.35 1.35 0 0 1 1.972 0l1.178 1.26c.266.285.643.441 1.032.428l1.724-.058a1.35 1.35 0 0 1 1.395 1.395l-.058 1.724c-.013.39.143.766.427 1.032l1.26 1.178a1.35 1.35 0 0 1 0 1.972l-1.26 1.178a1.35 1.35 0 0 0-.427 1.032l.058 1.724a1.35 1.35 0 0 1-1.395 1.395l-1.724-.058a1.35 1.35 0 0 0-1.032.427l-1.178 1.26a1.35 1.35 0 0 1-1.972 0l-1.178-1.26a1.35 1.35 0 0 0-1.032-.427l-1.724.058a1.35 1.35 0 0 1-1.395-1.395l.058-1.724a1.35 1.35 0 0 0-.427-1.032l-1.26-1.178a1.35 1.35 0 0 1 0-1.972l1.26-1.178a1.35 1.35 0 0 0 .427-1.032L2.685 4.08A1.35 1.35 0 0 1 4.08 2.685l1.724.058a1.35 1.35 0 0 0 1.032-.427z"
                />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.688"
                  d="M5.85 9.45 8.1 11.7l4.5-4.5"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h18v18H0z"/>
                </clipPath>
              </defs>
            </svg>
            <span className={styles.twCalloutUsername}>@ton_society</span>
          </div>
          <p className={styles.twCalloutText}>
            Today, TON Society launches a first of its kind initiative to urge france to{' '}
            <ExternalLink href="https://x.com/hashtag/DigitalResistance">
              #FreeDurov
            </ExternalLink>
            <br/>
            <br/>
            An Open Letter Mini App in Telegram.
          </p>
        </Callout>
        <Button
          className={styles.action}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                fill="#fff"
                d="M17.217 3.865h2.76l-6.03 6.892 7.094 9.378h-5.555l-4.35-5.688-4.978 5.688H3.396l6.45-7.372L3.04 3.866h5.695l3.932 5.199zm-.97 14.618h1.53L7.905 5.43H6.264z"
              />
            </svg>
          }
          onClick={onClick}
        >
          <Trans i18nKey="repost_tweet_btn"/>
        </Button>
      </div>
    </Section>
  );
}
