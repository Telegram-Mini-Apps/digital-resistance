import type { PropsWithChildren } from 'react';

import { ConfigContext, type ConfigContextValue } from './context';

export function ConfigProvider({ children, ...value }: PropsWithChildren<ConfigContextValue>) {
  return <ConfigContext.Provider value={value} children={children}/>;
}
