import { SWRConfig } from 'swr';
import type { PropsWithChildren } from 'react';

export function SWRProvider(props: PropsWithChildren) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      {props.children}
    </SWRConfig>
  );
}
