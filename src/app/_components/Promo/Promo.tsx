import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../../uilib/Button/Button';
import { Heading, SubHeadline } from '../../../uilib/Typography/Typography';
import { openTelegramLink } from '../../../utils/common';
import { TELEGRAM_CHANNEL_URL } from '../../../utils/constatns';

import styles from './styles.module.scss';

export const Promo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.root}>
        <div className={classNames(styles.iconsHolder, styles.top)}/>
        <div className={classNames(styles.iconsHolder, styles.bottom)}/>
      </div>
      <div className={styles.container}>
        <Heading
          type={'h2'}
          weight={'bold'}
          className={styles.title}
        >
          {t('splashTitle')}
          <span className={styles.highlight}>{t('telegram')}</span>
        </Heading>
        <Link
          to={TELEGRAM_CHANNEL_URL}
          target={'_blank'}
          onClick={() => openTelegramLink(TELEGRAM_CHANNEL_URL)}
        >
          <Button type={'secondary'}>
            <SubHeadline
              level={2}
              weight={'semi-bold'}
              caps
            >
              {t('exploreApps')}
            </SubHeadline>
          </Button>
        </Link>
      </div>
    </>
  );
};
