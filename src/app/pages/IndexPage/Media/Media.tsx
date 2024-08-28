import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';
import { ExternalLink } from '../ExternalLink/ExternalLink';

import styles from './Media.module.scss';

function ArrowIcon(props: { className?: string }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 5 5-5 5"
      />
    </svg>
  );
}

export function Media() {
  const { t } = useTranslation();

  const links = useMemo(() => [
    ['Bloomberg',
      'https://www.bloomberg.com/news/articles/2024-08-25/telegram-ceo-pavel-durov-arrested-at-paris-airport-afp-reports?srnd=homepage-americas&embedded-checkout=true'],
    ['Reuters',
      'https://www.reuters.com/world/europe/telegram-messaging-app-ceo-pavel-durov-arrested-france-tf1-tv-says-2024-08-24/'],
    ['The New York Times',
      'https://www.nytimes.com/2024/08/26/technology/pavel-durov-telegram-founder.html'],
    ['Techcrunch',
      'https://techcrunch.com/2024/08/25/telegram-founder-pavel-durov-reportedly-arrested-in-france/'],
  ], []);

  return (
    <Section title={t('the_situation_in_media')}>
      <div className={styles.items}>
        {links.map(([title, link]) => (
          <ExternalLink key={title} className={styles.item} href={link}>
            {title}
            <ArrowIcon className={styles.itemArrow}/>
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}