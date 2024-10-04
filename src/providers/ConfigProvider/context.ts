import { createContext, useContext } from 'react';

export interface ConfigContextValue {
  /**
   * API base URL used to send requests.
   */
  apiBaseUrl: string;
  /**
   * Base URL used to retrieve translations.
   */
  localesBaseUrl: string;
}

export const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export function useConfig(): ConfigContextValue {
  const v = useContext(ConfigContext);
  if (!v) {
    throw new Error('useConfig was used outside the context');
  }
  return v;
}