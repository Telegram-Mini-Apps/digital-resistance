import React, { useCallback, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { Wall } from './Wall/Wall';
import { Letter } from './Letter/Letter';
import { Progress } from './Progress/Progress';
import { Sign } from './Sign/Sign';
import { Media } from './Media/Media';
import { Header } from './Header/Header';
import { Share } from './Share/Share';
import { Toast } from './Toast/Toast';

import { useScrollRestoration } from '../../../hooks/useScrollRestoration';
import { useDataContext } from '../../../dataSource/DataContext/DataContext';
import { formatNumber } from '../../../utils/formatNumber';

import styles from './IndexPage.module.scss';

export default function IndexPage() {
  const dataContext = useDataContext();
  const debugNoSign = window.Telegram.WebApp.initDataUnsafe.start_param === 'debug_no_sign';

  const [signaturesCount, setSignaturesCount] = useState(dataContext.signaturesCount);
  const [page, setPage] = useState<'index' | 'share'>('index');

  const goToShare = useCallback(() => {
    setPage('share');
  }, []);

  const goToIndex = useCallback(() => {
    setPage('index');
  }, []);

  const [showThanks, setShowThanks] = useState(false);
  const [isSigned, setIsSigned] = useState(
    debugNoSign ? false : dataContext.isSigned,
  );
  const onSigned = useCallback((signaturesCount: number) => {
    setShowThanks(true);
    setIsSigned(true);
    setSignaturesCount(signaturesCount);
    goToShare();

    const thanksTimeoutId = setTimeout(() => {
      setShowThanks(false);
    }, 3500);

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

  const animation = {
    initial: { scale: 0.97, opacity: 0, transformOrigin: '50% 0' },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', bounce: 0, ease: 'easeInOut', duration: 0.5 },
  };

  return (
    <main className={styles.root} ref={ref}>
      <Header
        title={page === 'index'
          ? t('open_letter')
          // TODO: Should be a part of the translation itself.
          : `${formatNumber(signaturesCount)} ${t('people_signed')}`
        }
      />
      <AnimatePresence>
        <div>
          {page === 'share'
            ? (
              <motion.div key="share" {...animation}>
                <Share/>
              </motion.div>
            ) : (
              <motion.div key="index" {...animation}>
                <Progress current={signaturesCount}/>
                <Sign isSigned={isSigned} onSigned={onSigned} onShareClick={goToShare}/>
                <Letter/>
                <Wall/>
                <Media/>
              </motion.div>
            )}
        </div>
      </AnimatePresence>
      <AnimatePresence>
        {showThanks && (
          <Toast>
            <Trans i18nKey="thank_you_for_support"/>
          </Toast>
        )}
      </AnimatePresence>
    </main>
  );
}
