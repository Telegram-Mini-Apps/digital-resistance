import { Caption } from '../Typography/Typography';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const NewBadge = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Caption
        caps
        level={1}
        weight={'semi-bold'}
      >
        {t('new')}
      </Caption>
    </div>
  );
};
