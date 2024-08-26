import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';

import styles from './Letter.module.scss';
import { TgLink } from '../TgLink/TgLink';

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
    <TgLink href="https://t.me/tonsociety?hashtag=FreeDurov">#FreeDurov</TgLink>
  );

  return (
    <Section title={t('open_letter')}>
      <div className={styles.content}>
        {/*fixme: translations*/}
        <p>First Message Today to urge French officials for a statement on the situation</p>
        <p>Today, We stand with Pavel Durov - Creator of Telegram.</p>
        <p>
          We, the people of TON Society, urge the French and EU governments to immediately
          issue a public statement explaining the reasons for Pavel Durov's detainment.
          We urge all members of the public who support freedom of speech to also do
          the same and provide here the X handles of representatives you can reach.
        </p>
        <p>
          In support of the {drHashtag}, we are updating our profile pictures
          across TON Community channels to the global symbol of Digital Resistance—the
          Resistance Dog. Pavel Durov started this movement during his fight to maintain
          the privacy of Telegram users from Russian government surveillance. Today he
          faces persecution once more for protecting private conversations. We ask all
          who value the right to privacy and freedom of speech to do the same by sharing
          this post with the hashtag {freeHashtag} and updating their your profile pictures
          to the Resistance Dog.
        </p>
        <p>
          Join the {drHashtag}, {freeHashtag}.
        </p>
        <p>
          Key figures to contact are: {contacts}
        </p>
      </div>
    </Section>
  );
}