import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EditorsChoiceIcon } from '../../../uilib/EditorsChoiceIcon/EditorsChoiceIcon';
import { SubHeadline } from '../../../uilib/Typography/Typography';
import { openTelegramLink } from '../../../utils/common';
import { TELEGRAM_CHANNEL_URL } from '../../../utils/constatns';
import styles from './styles.module.scss';

interface IEditorsChoiceBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  shine?: boolean;
}

export const EditorsChoiceBadge: React.FC<IEditorsChoiceBadgeProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        classNames(styles.root, props.shine && styles.shine)
      }
    >
      <EditorsChoiceIcon size={'big'}/>
      <SubHeadline level={2} weight={'regular'}>
        {t('editorsChoiceDescription')} {t('seeMore')} <Link
        target={'_blank'}
        onClick={(e) => {
          e.preventDefault();
          openTelegramLink(TELEGRAM_CHANNEL_URL);
        }}
        to={TELEGRAM_CHANNEL_URL}
        className={styles.link}
      >
        {t('telegramChannel')}
      </Link>
      </SubHeadline>
    </div>
  );
};
