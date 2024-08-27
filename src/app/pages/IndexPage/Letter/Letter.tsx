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
        <p>France: The arrest of the Telegram founder, Pavel Durov, is a direct assault on the basic human right – the freedom of expression of everyone.</p>

        <p>We strongly condemn the arrest of Mr. Pavel Durov by the French authorities, a blatant attack on the freedom of expression and the right to private life.</p>

        <p>We call upon France to immediately release Mr. Durov and to respect the social media platform’s right to protect the freedom of expression, privacy of its users, and right to private life. We also call on the United Nations (UN), the Council of Europe (CoE), the Organisation for Security and Cooperation in Europe (OSCE), the European Union (EU), and other concerned governments to challenge France’s actions and uphold the fundamental right to liberty online. Lastly, we call on all tech and social media platforms to resist baseless and extra-judicial orders that violate the rights of their users, which must be defended at all costs.</p>

        <p><ExternalLink href="https://telegra.ph/Open-Letter-to-France-08-27"><strong>Read the full text ot the Open letter to France.</strong></ExternalLink></p>
      </div>
    </Section>
  );
}
