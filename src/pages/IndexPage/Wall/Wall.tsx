import React, { type ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';
import { ExternalLink } from '../../../components/ExternalLink/ExternalLink';

import styles from './Wall.module.scss';

type CelebrityKey =
  | 'buterin'
  | 'carlson'
  | 'graham'
  | 'musk'
  | 'snowden'
  | 'kennedy'
  | 'lexfridman'
  | 'nayibbukele';

interface Quote {
  /**
   * Author name.
   */
  author: string;
  /**
   * Message creation date.
   */
  date: Date;
  /**
   * Author key.
   */
  key: CelebrityKey;
  /**
   * Message text.
   */
  text: ReactNode;
  /**
   * Twitter message link.
   */
  source: string;
}

function celebrityImage(key: CelebrityKey, scale: number): string {
  return `/img/celebrities/${key}/@${scale}x.png`;
}

function formatDate(date: Date): string {
  // TODO: We want something like that: 6:32 AM · Jul 20, 2024
  return Intl
    .DateTimeFormat(undefined, {
      day: '2-digit',
      hourCycle: 'h24',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: undefined,
    })
    .format(date);
}

export function Wall() {
  const { t } = useTranslation();
  const quotes = useMemo<Quote[]>(() => [
    {
      author: 'Elon Musk',
      date: new Date(Date.UTC(2024, 7, 25, 5, 4)),
      key: 'musk',
      source: 'https://x.com/elonmusk/status/1827572720936030703',
      text: '#FreePavel',
    },
    {
      author: 'Vitalik Buterin',
      date: new Date(Date.UTC(2024, 7, 25, 7, 3)),
      key: 'buterin',
      source: 'https://twitter.com/VitalikButerin/status/1827602680388239582',
      text: (
        <>
          <p>I've criticized Telegram before for not being serious with encryption.</p>
          <p>
            But (given the info available so far: the charge seems to be just being
            "unmoderated" and not giving up people's data), this looks very bad and
            worrying for the future of software and comms freedom in Europe.
          </p>
        </>
      ),
    },
    {
      author: 'Edward Snowden',
      key: 'snowden',
      // fixme: openTelegramLink
      text: (
        <p>
          First they came for Tiktok, and I did not speak out—
          Because I was not twelve years old. Then they came for the Telegram, and I did not speak
          out—
          Because I was using some other app or sth idk. Then they came for literally every other
          platform for dissent, and I did not speak out—
          because bro how tf could i that's the entire point wake up wake up wa—
        </p>
      ),
      date: new Date(Date.UTC(2024, 7, 25, 1, 13)),
      source: 'https://x.com/Snowden/status/1827702193572446348',
    },
    {
      author: 'Tucker Carlson',
      date: new Date(Date.UTC(2024, 7, 24, 21, 37)),
      key: 'carlson',
      source: 'https://x.com/TuckerCarlson/status/1827460234887008277',
      text: (
        <p>
          Pavel Durov left Russia when the government tried to control his social media
          company, Telegram. But in the end, it wasn't Putin who arrested him for
          allowing the public to exercise free speech. It was a western country, a Biden
          administration ally and enthusiastic NATO member, that locked him away. Pavel
          Durov sits in a French jail tonight, a living warning to any platform owner who
          refuses to censor the truth at the behest of governments and intel agencies.
          Darkness is descending fast on the formerly free world.
        </p>
      ),
    },
    {
      author: 'Paul Graham',
      date: new Date(Date.UTC(2024, 7, 25, 2, 32)),
      key: 'graham',
      source: 'https://x.com/paulg/status/1827534519618224335',
      text: (
        <p>
          It's hard to imagine a country both arresting the founder of Telegram and being
          a major startup hub.
        </p>
      ),
    },
    {
      author: 'Robert F. Kennedy Jr',
      date: new Date(Date.UTC(2024, 7, 25, 4, 56)),
      key: 'kennedy',
      source: 'https://x.com/robertkennedyjr/status/1827540616282055012',
      text: (
        <p>
          France just arrested Pavel Durov, founder & CEO of the encrypted, uncensored Telegram
          platform. The need to protect free speech has never been more urgent.
        </p>
      ),
    },
    {
      author: 'Lex Fridman',
      date: new Date(Date.UTC(2024, 7, 25, 20, 1)),
      key: 'lexfridman',
      source: 'https://x.com/lexfridman/status/1827783276657877198',
      text: (
        <p>Arrest of Pavel Durov is a disturbing attack on free speech and a threat not just to
          Telegram but to any online platform. <br/>
          <br/>
          Governments should not engage in censorship. This is a blatant and deeply troubling
          overreach of power.</p>
      ),
    },
    {
      author: 'Nayib Bukele',
      date: new Date(Date.UTC(2024, 7, 25, 2, 26)),
      key: 'nayibbukele',
      source: 'https://x.com/nayibbukele/status/1827502729402437924',
      text: (
        <p>El Salvador is not only the safest country in the Western Hemisphere, but we also
          guarantee that you won’t be arrested, censored, or have your assets seized for exercising
          your right to free speech.
          <br/>
          <br/>
          And there’s no property tax 🤷🏻‍♂️
        </p>
      ),
    },
  ], []);

  return (
    <Section title={t('wall_title')}>
      <div className={styles.content}>
        {quotes.map(({ key, date, ...q }) => (
          <ExternalLink className={styles.quote} key={key} href={q.source}>
            <div className={styles.quoteTop}>
              <img
                className={styles.quoteImage}
                alt={`${q.text} quote`}
                src={celebrityImage(key, 1)}
                srcSet={`${celebrityImage(key, 2)} 2x`}
              />
              <div className={styles.quoteMessage}>
                <p className={styles.quoteAuthor}>{q.author}</p>
                <div className={styles.quoteText}>{q.text}</div>
              </div>
            </div>
            <div className={styles.quoteDate}>
              {formatDate(date)} via X (ex. Twitter)
            </div>
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}