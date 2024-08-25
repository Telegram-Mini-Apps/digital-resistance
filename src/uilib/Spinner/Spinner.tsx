import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface ISpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Spinner: React.FC<ISpinnerProps> = (props) => {
  return (
    <span className={classNames(styles.spinnerWrapper, props.className)}>
            <div className={styles.spinner}/>
        </span>
  );
};
