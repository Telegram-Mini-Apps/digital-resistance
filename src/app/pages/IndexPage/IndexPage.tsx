import React, { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Wall } from './Wall/Wall';
import { Letter } from './Letter/Letter';
import { Progress } from './Progress/Progress';
import { Sign } from './Sign/Sign';
import { Media } from './Media/Media';
import { Header } from './Header/Header';
import { Share } from './Share/Share';

import { useScrollRestoration } from '../../../hooks/useScrollRestoration';
import { useDataContext } from '../../../dataSource/DataContext/DataContext';

import styles from './IndexPage.module.scss';

export default function IndexPage() {
  const { isSigned: isAlreadySigned, signaturesCount } = useDataContext();

  const [isSigned, setIsSigned] = useState(isAlreadySigned);
  const [showTransition, setShowTransition] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const onSigned = useCallback(() => {
    setShowTransition(true);
    setShowThanks(true);
    setIsSigned(true);

    const transitionTimeoutId = setTimeout(() => {
      setShowTransition(false);
    }, 300);
    const thanksTimeoutId = setTimeout(() => {
      setShowThanks(false);
    }, 4500);

    return () => {
      clearTimeout(transitionTimeoutId);
      clearTimeout(thanksTimeoutId);
    };
  }, []);

  const { ref } = useScrollRestoration('indexPage', { debounceTime: 200 });
  const { t } = useTranslation();

  return (
    <main className={styles.root} ref={ref}>
      <Header
        title={isSigned
          // TODO: Should be a part of the translation itself.
          ? `${signaturesCount} ${t('people_signed')}`
          : t('we_demand_release')}
      />
      <div className={styles.body}>
        {isSigned
          ? (
            <div className={cn({ [styles.shareSectionsAppear]: showTransition })}>
              <Share/>
            </div>
          )
          : (
            <>
              <Progress current={signaturesCount}/>
              <Sign onSigned={onSigned}/>
              <Letter/>
              <Wall/>
              <Media/>
            </>
          )}
      </div>
      {showThanks && (
        <div className={styles.thanks}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m5.183-15.083a.8.8 0 1 0-1.366-.834l-4.932 8.07-2.783-3.18a.8.8 0 0 0-1.204 1.054l3.5 4a.8.8 0 0 0 1.285-.11z"
              clipRule="evenodd"
            />
          </svg>
          <Trans i18nKey="thank_you_for_support"/>
        </div>
      )}
    </main>
  );
}
