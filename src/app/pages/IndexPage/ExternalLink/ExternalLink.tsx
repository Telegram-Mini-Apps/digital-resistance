import { HTMLProps, PointerEventHandler, useCallback } from 'react';
import cn from 'classnames';

import styles from './ExternalLink.module.scss';

interface Props extends HTMLProps<HTMLAnchorElement> {
  href: string;
}

export function ExternalLink(props: Props) {
  const onClick = useCallback<PointerEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    window.Telegram.WebApp.openLink(props.href);
  }, []);

  return <a {...props} className={cn(styles.root, props.className)} onClick={onClick}/>;
}