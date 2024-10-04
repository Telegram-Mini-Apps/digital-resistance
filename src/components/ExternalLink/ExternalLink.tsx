import { type HTMLProps, type PointerEventHandler, useCallback } from 'react';
import { openLink } from '@telegram-apps/sdk-react';
import cn from 'classnames';

import styles from './ExternalLink.module.scss';

interface Props extends HTMLProps<HTMLAnchorElement> {
  href: string;
  tryInstantView?: boolean;
}

export function ExternalLink({ href, tryInstantView, className, ...rest }: Props) {
  const onClick = useCallback<PointerEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    openLink(href, { tryInstantView });
  }, [href, tryInstantView]);

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...rest} className={cn(styles.root, className)} onClick={onClick}/>;
}