import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const targetCount = useMemo(() => 1000000, []);

  const mountedRef = useRef(false);
  const [isSigned, setIsSigned] = useState(isAlreadySigned);
  const onSigned = useCallback(() => {
    setIsSigned(true);
  }, []);

  const { ref } = useScrollRestoration('indexPage', { debounceTime: 200 });
  const { t } = useTranslation();

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [appear, setAppear] = useState(false);
  useEffect(() => {
    if (mountedRef.current && isSigned) {
      setAppear(true);
      const timeoutId = setTimeout(() => {
        setAppear(false);
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSigned]);

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
            <div className={cn(styles.shareSections, { [styles.shareSectionsAppear]: appear })}>
              <Share/>
            </div>
          )
          : (
            <>
              <Progress current={signaturesCount} next={targetCount}/>
              <Sign onSigned={onSigned}/>
              <Letter/>
              <Wall/>
              <Media/>
            </>
          )}
      </div>
    </main>
  );
}
