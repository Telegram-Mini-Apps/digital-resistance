import React, { useCallback, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

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
  const debugNoSign = window.Telegram.WebApp.initDataUnsafe.start_param === 'debug_no_sign';

  const [page, setPage] = useState<'index' | 'share'>(
    debugNoSign
      ? 'index'
      : isAlreadySigned ? 'share' : 'index',
  );

  const goToShare = useCallback(() => {
    setPage('share');
  }, []);

  const goToIndex = useCallback(() => {
    setPage('index');
  }, []);

  const [showThanks, setShowThanks] = useState(false);
  const [isSigned, setIsSigned] = useState(
    debugNoSign ? false : isAlreadySigned,
  );
  const onSigned = useCallback(() => {
    setShowThanks(true);
    setIsSigned(true);
    goToShare();

    const thanksTimeoutId = setTimeout(() => {
      setShowThanks(false);
    }, 4500);

    return () => {
      clearTimeout(thanksTimeoutId);
    };
  }, [goToShare]);

  const { ref } = useScrollRestoration('indexPage', { debounceTime: 200 });
  const { t } = useTranslation();

  useEffect(() => {
    const bb = window.Telegram.WebApp.BackButton;
    bb.onClick(goToIndex);
    return () => {
      bb.offClick(goToIndex);
    };
  }, [goToIndex]);

  useEffect(() => {
    const bb = window.Telegram.WebApp.BackButton;
    page === 'index' ? bb.hide() : bb.show();
  }, [page]);

  return (
    <main className={styles.root} ref={ref}>
      <Header
        title={page === 'index'
          ? t('we_demand_release')
          // TODO: Should be a part of the translation itself.
          : `${signaturesCount} ${t('people_signed')}`
        }
      />
      <div className={styles.body}>
        {page === 'share'
          ? <Share/>
          : (
            <>
              <Progress current={signaturesCount}/>
              <Sign
                isSigned={isSigned}
                onSigned={onSigned}
                onShareClick={goToShare}
              />
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
