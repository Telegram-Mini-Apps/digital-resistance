import React, { type PropsWithChildren } from 'react';

import { useMixpanel } from '../../hooks/hooks';

interface DataContextState {
  signaturesCount: number;
  isSigned: boolean;
}

const DataContext = React.createContext<DataContextState>({
  signaturesCount: 0,
  isSigned: false,
});

export function DataProvider(props: PropsWithChildren<DataContextState>) {
  useMixpanel();

  return (
    <DataContext.Provider value={props}>
      {props.children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => React.useContext(DataContext);
