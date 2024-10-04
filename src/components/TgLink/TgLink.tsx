import { HTMLProps, PointerEventHandler, useCallback } from 'react';
import { openTelegramLink } from '@telegram-apps/sdk-react';
import cn from 'classnames';

import styles from './TgLink.module.scss';

interface Props extends HTMLProps<HTMLAnchorElement> {
  href: string;
}

export function TgLink(props: Props) {
  const { href } = props;
  const onClick = useCallback<PointerEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    openTelegramLink(href);
  }, [href]);

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} className={cn(styles.root, props.className)} onClick={onClick}/>;
}