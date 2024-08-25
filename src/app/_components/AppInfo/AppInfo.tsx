import { useApplicationContext } from '../../../dataSource/ApplicationContext';
import { AnimateEnter } from '../../../uilib/Enter/Enter';
import { EditorsChoiceBadge } from '../EditorsChoiceBadge/EditorsChoiceBadge';
import styles from './styles.module.scss';

export const AppInfo = () => {
  const { application, isLoading } = useApplicationContext();

  if (isLoading) {
    return (
      <div className={styles.root}>
        <EditorsChoiceBadge shine={true}/>
      </div>
    );
  }

  return application?.attributes?.editors_choice
    ? (
      <AnimateEnter>
        <div className={styles.root}>
          <EditorsChoiceBadge/>
        </div>
      </AnimateEnter>
    )
    : null;
};
