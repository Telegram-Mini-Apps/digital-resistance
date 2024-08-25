'use client';

import React from 'react';
import { SWRConfig } from 'swr';

export const SWRProvider = (props: { children: React.ReactNode, categories: any }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          ['categories']: props.categories,
        },
        provider: () => new Map(),
      }}
    >
      {props?.children}
    </SWRConfig>
  );
};
