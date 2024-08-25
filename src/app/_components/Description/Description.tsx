import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useApplicationContext } from '../../../dataSource/ApplicationContext';
import { AnimateEnter } from '../../../uilib/Enter/Enter';
import { Callout, Heading } from '../../../uilib/Typography/Typography';
import styles from './styles.module.scss';

export const Description = () => {
  const { t } = useTranslation();

  const {
    application,
    isLoading,
  } = useApplicationContext();

  if (isLoading) {
    return (
      <div className={classNames(styles.root)}>
        <div className={classNames(styles.shine)}/>
      </div>
    );
  }

  return application?.attributes.long_description
    ? (
      <AnimateEnter>
        <div className={styles.root}>
          <Heading
            type={'h4'}
            weight={'bold'}
            className={styles.heading}
          >
            {t('description')}
          </Heading>
          <Callout weight={'regular'}>
            {application?.attributes.long_description}
          </Callout>
        </div>
      </AnimateEnter>
    )
    : null;
};
