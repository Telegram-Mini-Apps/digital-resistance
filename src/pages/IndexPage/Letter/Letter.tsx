import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';

import { TgLink } from '../../../components/TgLink/TgLink';
import { ExternalLink } from '../../../components/ExternalLink/ExternalLink';

import styles from './Letter.module.scss';

export function Letter() {
  const { t } = useTranslation();

  const drHashtag = (
    <TgLink href="https://t.me/tonsociety?hashtag=DigitalResistance">#DigitalResistance</TgLink>
  );
  const freeHashtag = (
    <TgLink href="https://t.me/tonsociety?hashtag=FreeDurov">#FREEDUROV</TgLink>
  );

  return (
    <Section title={t('open_title')}>
      <div className={styles.content}>
        <p>
          Dear {drHashtag} community, thanks to all of your support, Pavel Durov was able to
          avoid imprisonment. Since he has been indicted, we will have to go through the due process
          in France. Mr. Durov won’t be able to leave France and has to report to the police twice a
          week. This is a very important milestone, but we must continue to support him until we
          achieve complete victory. {freeHashtag} ✊
        </p>

        <p>
          <ExternalLink href={t('full_letter_link')} tryInstantView>
            <strong>
              {t('letter_p4')}
            </strong>
          </ExternalLink>
        </p>
      </div>
    </Section>
  );
}
