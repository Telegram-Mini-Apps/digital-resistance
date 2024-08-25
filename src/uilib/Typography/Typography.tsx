/**
 * Typography
 * - Title 1
 *     - Bold
 *     - Semibold
 *
 *  - Title 2
 *     - Bold
 *
 *  - Title 3
 *     - Bold
 *     - Semibold
 *
 *  - Title 4
 *     - Bold
 *     - Semibold
 *
 *  - Body
 *     - Bold
 *     - Semibold
 *     - Regular
 *
 *  - Subheadline
 *     - Bold
 *     - Semibold
 *     - Regular
 *
 *  - Footnote
 *     - CAPS SEMIBOLD
 *     - Bold
 *     - Semibold
 *     - Regular
 *
 *  - Caption 1
 *     - CAPS SEMIBOLD
 *     - Bold
 *     - Semibold
 *     - Regular
 *
 *  - Caption 2
 *     - CAPS SEMIBOLD
 *     - Bold
 *     - Semibold
 *     - Regular
 */

import React, { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type FontWeight = 'bold' | 'semi-bold' | 'medium' | 'regular';

enum HeadingType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

interface IHeadingProps extends HTMLAttributes<HTMLSpanElement> {
  weight: Exclude<FontWeight, 'medium'>,
  type?: keyof typeof HeadingType,
}

export const Heading: React.FC<PropsWithChildren<IHeadingProps>> = (props) => {
  const { weight, type, className } = props;

  const fontWeight = styles[`font-weight-${weight}`];

  if (type === HeadingType.h2) {
    return (
      <h2 className={classNames(fontWeight, styles.h2, className)}>
        {props.children}
      </h2>
    );
  }

  if (type === HeadingType.h3) {
    return (
      <h3 className={classNames(fontWeight, styles.h3, className)}>
        {props.children}
      </h3>
    );
  }

  if (type === HeadingType.h4) {
    return (
      <h4 className={classNames(fontWeight, styles.h4, className)}>
        {props.children}
      </h4>
    );
  }

  return (
    <h1 className={classNames(fontWeight, styles.h1, className)}>
      {props.children}
    </h1>
  );
};

interface IBodyProps extends HTMLAttributes<HTMLParagraphElement> {
  weight: FontWeight,
}

export const Body: React.FC<PropsWithChildren<IBodyProps>> = (props) => {
  const { weight } = props;

  const fontWeight = styles[`font-weight-${weight}`];

  return (
    <p className={classNames(fontWeight, styles.body, props.className)}>
      {props.children}
    </p>
  );
};

interface ICalloutProps extends HTMLAttributes<HTMLParagraphElement> {
  weight: Exclude<FontWeight, 'bold'>,
}

export const Callout: React.FC<PropsWithChildren<ICalloutProps>> = (props) => {
  const { weight, className } = props;

  const fontWeight = styles[`font-weight-${weight}`];

  return (
    <p className={classNames(fontWeight, styles.callout, className)}>
      {props.children}
    </p>
  );
};

export interface ISubHeadlineProps extends HTMLAttributes<HTMLSpanElement> {
  weight: FontWeight,
  level: 1 | 2,
  caps?: boolean,
}

export const SubHeadline: React.FC<PropsWithChildren<ISubHeadlineProps>> = (props) => {
  const { weight, level, className } = props;

  const fontWeight = styles[`font-weight-${weight}`];
  const levelClass = styles[`subHeadline__level__${level}`];
  const caps = props.caps ? styles.caps : '';

  return (
    <span className={classNames(className, fontWeight, styles.subHeadline, levelClass, caps)}>
            {props.children}
        </span>
  );
};

interface IFootnoteProps {
  weight: Exclude<FontWeight, 'bold'>,
  caps?: boolean,
}

export const Footnote: React.FC<PropsWithChildren<IFootnoteProps>> = (props) => {
  const { weight } = props;
  const fontWeight = styles[`font-weight-${weight}`];
  const caps = props.caps ? styles.caps : '';

  return (
    <span className={classNames(styles.footNote, fontWeight, caps)}>
            {props.children}
        </span>
  );
};

interface ICaptionProps extends HTMLAttributes<HTMLSpanElement> {
  weight: Exclude<FontWeight, 'bold'>,
  level: 1 | 2,
  caps?: boolean,
}

export const Caption: React.FC<PropsWithChildren<ICaptionProps>> = (props) => {
  const { weight, level, className } = props;
  const caps = props.caps ? styles.caps : '';
  const fontWeight = styles[`font-weight-${weight}`];
  const levelClass = styles[`caption__level__${level}`];

  return (
    <span className={classNames(styles.caption, fontWeight, caps, levelClass, className)}>
            {props.children}
        </span>
  );
};
