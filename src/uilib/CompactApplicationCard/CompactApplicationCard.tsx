import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import system from '../../services/System';
import { Button } from '../Button/Button';
import { Ripple } from '../Ripple/Ripple';
import styles from './styles.module.scss';
import { TWAApplication } from '../../../types/entities';
import { Body, SubHeadline } from '../Typography/Typography';
import { TWA_APPLICATIONS_ROOT_PATH } from '../../utils/constatns';
import { ProgressiveImage } from '../ProgressiveImage/ProgressiveImage';

export interface ICompactApplicationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  application?: TWAApplication;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const CompactApplicationCard: React.FC<ICompactApplicationCardProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAppOpen = () => {
    if (props.loading) {
      return;
    }

    const path = props.application?.attributes?.path;

    system.delayAction(() => {
      navigate(`${TWA_APPLICATIONS_ROOT_PATH}/${path}`);
    });
  };

  return (
    <Ripple
      onClick={handleAppOpen}
      className={props.className}
    >
      <div className={styles.root}>
        {props.icon || (
          <ProgressiveImage
            width={48}
            height={48}
            className={classNames(styles.image, props.loading && styles.shine)}
            src={props.application?.attributes.icon.data?.attributes.url}
            alt={props.application?.attributes.icon.data?.attributes.name || ''}
          />
        )}
        <div className={styles.content}>
          <Body
            className={
              classNames(
                styles.title,
                props.loading && styles.shine,
                props.loading && styles.shimmer,
                props.loading && styles.medium,
              )
            }
            weight={'medium'}
          >
            {
              props.loading
                ? MOCK_DATA_STRING
                : props.application?.attributes.title
            }
          </Body>
          <SubHeadline
            weight={'regular'}
            level={2}
            className={
              classNames(
                styles.description,
                props.loading && styles.shine,
                props.loading && styles.shimmer,
              )
            }
          >
            {
              props.loading
                ? MOCK_DATA_STRING
                : props.application?.attributes.description
            }
          </SubHeadline>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            type={'secondary'}
            className={classNames(props.loading && styles.shine)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              props.onButtonClick && props.onButtonClick(e);
            }}
          >
            <SubHeadline
              caps
              level={1}
              weight={'semi-bold'}
            >
              {t('open')}
            </SubHeadline>
          </Button>
        </div>
      </div>
    </Ripple>
  );
};

const MOCK_DATA_STRING = 'lorem ipsum dolor sit amet consectetur adipiscing elit';
