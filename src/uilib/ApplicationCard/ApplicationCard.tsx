import React, { HTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTWAPlatform } from '../../hooks';
import system from '../../services/System';
import { TWA_APPLICATIONS_ROOT_PATH } from '../../utils/constatns';

import { Button } from '../Button/Button';
import { NewBadge } from '../NewBadge/NewBadge';
import { EditorsChoiceIcon } from '../EditorsChoiceIcon/EditorsChoiceIcon';
import { ProgressiveImage } from '../ProgressiveImage/ProgressiveImage';
import { Body, SubHeadline } from '../Typography/Typography';

import styles from './styles.module.scss';

export interface IApplicationCardProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  editorsChoice?: boolean;
  focused?: boolean;
  path?: string;
  img?: {
    src: string;
    name: string;
  };
  isNew?: boolean;
  loading?: boolean;
  noControls?: boolean;
  noFocus?: boolean;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  url?: string;
}

export const ApplicationCard: React.FC<IApplicationCardProps> = React.memo((props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const platform = useTWAPlatform();

  const {
    img,
    isNew,
    title,
    noFocus,
    loading,
    className,
    description,
    editorsChoice,
    onClick,
    onButtonClick,
  } = props;

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    system.delayAction(() => {
      navigate(`${TWA_APPLICATIONS_ROOT_PATH}/${props.path}`);

      if (onClick) {
        onClick(e);
      }
    });
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      className={classNames(
        styles.root,
        className,
        styles.hoverState,
        noFocus && styles.noFocus,
      )}
      onClick={clickHandler}
    >
      <div className={styles.imageContainer}>
        <ProgressiveImage
          src={img?.src}
          width={72}
          height={72}
          alt={title || ''}
          className={classNames(styles.image, loading && styles.shine)}
        />
      </div>
      <div className={styles.body}>
        {loading && (
          <div className={styles.shimmers}>
            <div className={classNames(styles.shimmer, styles.shine)}/>
            <div className={classNames(styles.shimmer, styles.medium, styles.shine)}/>
            <div className={styles.shimmersRow}>
              <div className={classNames(styles.shimmer, styles.big, styles.shine)}/>
            </div>
          </div>
        )}
        {!loading && (
          <div className={styles.content}>
            <Body
              weight={'medium'}
              className={classNames(styles.title, loading)}
            >
              {title}
            </Body>
            <div className={styles.additionInfoContainer}>
              {isNew && <NewBadge/>}
              {editorsChoice && <EditorsChoiceIcon/>}
            </div>
            <SubHeadline
              level={2}
              weight={'regular'}
              className={classNames(styles.description, loading)}
            >
              {description}
            </SubHeadline>
          </div>
        )}
        {!props.noControls && !loading && (
          <div className={styles.controls}>
            <Button
              type={'secondary'}
              tabIndex={-1}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onButtonClick && onButtonClick(e);
              }}
            >
              <SubHeadline
                level={1}
                caps
                weight={'semi-bold'}
                className={styles.buttonLabel}
              >
                {t('open')}
              </SubHeadline>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}, ({ focused: focusedPrev }, { focused: focusedNext }) => {
  return focusedNext === focusedPrev;
});

ApplicationCard.displayName = 'ApplicationCard';
