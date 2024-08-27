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
    <TgLink href="https://t.me/tonsociety?hashtag=FreeDurov">#FREEDUROV</TgLink>
  );

  return (
    <Section title={t('open_letter')}>
      <div className={styles.content}>
        {/*fixme: translations*/}
        <p>Enabling freedom of private speech is not a crime. The creator of Telegram, Pavel Durov, has been unjustly targeted by French authorities for protecting our right to private communication.</p>
        <p>The charges? Complicity in the crimes of criminals on an open, free and private messaging service! By this logic every manufacturer of automobiles is guilty for crimes committed in cars, every mobile phone maker guilty for the illegal content shared using their devices, every religious person guilty of the terrorism committed in the name of their religion.</p>
        <p>We, the people of the world will not stand by when the fundamental rights of free speech and privacy are being abandoned by those that say they represent our views. We must stand up and demand our voices will be heard.</p>
        <p>The {drHashtag} movement was started by Pavel Durov himself, and has already beat attacks on the privacy of Telegram’s users. The movement is symbolized by Durov’s own dog in a hood – <strong>Resistance Dog</strong> – The global symbol of Digital Resistance.</p>
        <p>TON Community have updated our profile pictures across all channels, we’ve updated the logo of Toncoin to the Resistance Dog—the global symbol of Digital Resistance.</p>
        <p>This symbolic change goes deeper than solidarity. In internet culture, meme’s rule the world. We believe meme culture can change the world. Memes are powerful, a shortcut to an emotional feeling. TON Community and Toncoin’s culture seen through Resistance Dog as the {drHashtag} sends a powerful message: <strong>we stand united in protection of fundamental rights - the right to privacy, and the freedom to speak our minds.</strong></p>
        <p>This gesture is not just about showing support—it’s an act of resistance. It’s a declaration that the values of the {drHashtag} are non-negotiable, and we will not compromise.</p>
        <p>This is more than just a battle for one man’s freedom. It’s a battle for our future. Freedom of speech and the right to privacy are not negotiable—they are the foundation of society. If we allow anyone to strip these rights away, we risk losing everything.</p>
        <p>Demand your voice is heard. Sign this petition. Share it as far and wide as possible, use the hashtag {freeHashtag}. Defend your fundamental rights. RESIST and secure the right to speak your mind.</p>
      </div>
    </Section>
  );
}