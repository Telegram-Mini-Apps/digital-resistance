import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../_components/PageContainer/PageContainer';
import { Wall } from './Wall/Wall';
import { Letter } from './Letter/Letter';
import { Progress } from './Progress/Progress';
import { Sign } from './Sign/Sign';
import { Media } from './Media/Media';
import { Header } from './Header/Header';

import { useScrollRestoration } from '../../../hooks/useScrollRestoration';

export default function IndexPage() {
  const [signedCount, setSignedCount] = useState(123456);
  const [targetCount, setTargetCount] = useState(1000000);

  const [isSigned, setIsSigned] = useState();

  const { ref } = useScrollRestoration('indexPage', { debounceTime: 200 });
  const { t, i18n } = useTranslation();

  return (
    <PageContainer ref={ref}>
      <Header
        title={isSigned
          // TODO: Should be a part of the translation itself.
          ? `${targetCount} ${t('people_signed')}`
          : t('we_demand_release')}
      />
      <Progress current={signedCount} next={targetCount}/>
      <Sign/>
      <Letter/>
      <Wall/>
      <Media/>
    </PageContainer>
  );
}
