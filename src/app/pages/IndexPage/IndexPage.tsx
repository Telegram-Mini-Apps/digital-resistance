import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Wall } from './Wall/Wall';
import { Letter } from './Letter/Letter';
import { Progress } from './Progress/Progress';
import { Sign } from './Sign/Sign';
import { Media } from './Media/Media';
import { Header } from './Header/Header';

import { useScrollRestoration } from '../../../hooks/useScrollRestoration';

import styles from './IndexPage.module.scss';
import { Share } from './Share/Share';

export default function IndexPage() {
  const [signedCount, setSignedCount] = useState(123456);
  const [targetCount, setTargetCount] = useState(1000000);

  const [isSigned, setIsSigned] = useState(false);
  const onSigned = useCallback(() => {
    setIsSigned(true);
  }, []);

  const { ref } = useScrollRestoration('indexPage', { debounceTime: 200 });
  const { t, i18n } = useTranslation();

  return (
    <main className={styles.root} ref={ref}>
      <Header
        title={isSigned
          // TODO: Should be a part of the translation itself.
          ? `${signedCount} ${t('people_signed')}`
          : t('we_demand_release')}
      />
      {isSigned
        ? <Share/>
        : (
          <>
            <Progress current={signedCount} next={targetCount}/>
            <Sign onSigned={onSigned}/>
            <Letter/>
            <Wall/>
            <Media/>
          </>
        )}
    </main>
  );
}
