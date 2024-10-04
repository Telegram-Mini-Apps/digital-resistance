import type { PropsWithChildren } from 'react';

import { DataContext, type DataContextValue } from './context';

export function DataProvider({ children, ...value }: PropsWithChildren<DataContextValue>) {
  return <DataContext.Provider value={value} children={children}/>;
}
