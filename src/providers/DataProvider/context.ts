import { createContext, useContext } from 'react';

export interface DataContextValue {
  /**
   * Count of users signed the petition.
   */
  signaturesCount: number;
  /**
   * True if the user signed the petition.
   */
  isSigned: boolean;
}

export const DataContext = createContext<DataContextValue | undefined>(undefined);

export function useData(): DataContextValue {
  const v = useContext(DataContext);
  if (!v) {
    throw new Error('useData was used outside the context');
  }
  return v;
}