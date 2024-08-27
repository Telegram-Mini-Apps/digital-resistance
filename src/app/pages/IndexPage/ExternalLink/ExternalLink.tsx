import { HTMLProps, PointerEventHandler, useCallback } from 'react';
import cn from 'classnames';

import styles from './ExternalLink.module.scss';

interface Props extends HTMLProps<HTMLAnchorElement> {
  href: string;
  tryInstantView?: boolean;
}

export function ExternalLink({ href, tryInstantView, className, ...rest }: Props) {
  const onClick = useCallback<PointerEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    window.Telegram.WebApp.openLink(href, { try_instant_view: tryInstantView || false });
  }, [href, tryInstantView]);

  return <a {...rest} className={cn(styles.root, className)} onClick={onClick}/>;
}