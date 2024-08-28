import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';

import styles from './Letter.module.scss';
import { TgLink } from '../TgLink/TgLink';
import { ExternalLink } from '../ExternalLink/ExternalLink';

export function Letter() {
  const { t } = useTranslation();
  const contacts = [
    'gouvernementFR', 'EmmanuelMacron', 'FrenchAmbUS',
    'franceintheus', 'Ph_Etienne', 'AClaireLegendre', 'F_Mondoloni', 'DG_DGRIS',
    'NDeRiviere', 'MinColonna', 'prefpolice', 'PoliceNationale', 'Gendarmerie',
    'Interieur_Gouv', 'Elisabeth_Borne',
  ]
    .reduce<ReactNode[]>((acc, contact, idx) => {
      if (idx !== 0) {
        acc.push(', ');
      }
      // FIXME: Aren't these X accounts?
      acc.push(<TgLink key={contact} href={`https://t.me/${contact}`}>@{contact}</TgLink>);
      return acc;
    }, []);

  const drHashtag = (
    <TgLink href="https://t.me/tonsociety?hashtag=DigitalResistance">#DigitalResistance</TgLink>
  );
  const freeHashtag = (
    <TgLink href="https://t.me/tonsociety?hashtag=FreeDurov">#FREEDUROV</TgLink>
  );

  return (
    <Section title={t('open_title')}>
      <div className={styles.content}>
        {/*fixme: translations*/}
        <p>{t('letter_p1')}</p>

        <p>{t('letter_p2')}</p>

        <p>{t('letter_p3')}</p>

        <p>
          <ExternalLink href={t('full_letter_link')} tryInstantView>
            <strong><p>{t('letter_p4')}</p></strong>
          </ExternalLink>
        </p>
      </div>
    </Section>
  );
}
