import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import useSWR from 'swr';

import { DataProvider } from '../../dataSource/DataContext/DataContext';
import { initI18n } from '../../dataSource/LocaleContext/i18n';

import { hideLoader } from '../../utils/ui';

export default function Layout() {
  const { data, isLoading: isPetitionLoading } = useSWR<{
    id: string;
    title: string;
    image_url: string;
    description: string;
    created_at: string;
    is_signed_by_user: boolean;
    signatures_count: number;
  }>('petition', () => {
    return fetch('/api/petitions/freedurov', {
      headers: {
        'x-init-data': window.Telegram.WebApp.initData,
      },
    })
      .then(r => r.json())
      .then(r => {
        if (r.data === 'error') {
          throw new Error('Unknown error');
        }
        if (r.error) {
          throw new Error(r.message);
        }
        return r.data;
      });
  }, {
    revalidateOnFocus: false,
  });

  const [isI18nLoading, setIsI18nLoading] = useState(true);

  useEffect(() => {
    initI18n()
      .catch(console.error)
      .finally(() => setIsI18nLoading(false));
  }, []);

  useEffect(() => {
    if (!isI18nLoading && !isPetitionLoading && data) {
      // We are not hiding the loader on purpose, because change of loadingI18n to
      // false will also lead to rendering the Outlet component, which may be the reason
      // of layout shifts (due to loading images, for example).
      const timeoutId = setTimeout(hideLoader, 100);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isI18nLoading, isPetitionLoading, data]);

  return (
    <>
      <ScrollRestoration/>
      {data && (
        <DataProvider isSigned={data.is_signed_by_user} signaturesCount={data.signatures_count}>
          {!isI18nLoading && <Outlet/>}
        </DataProvider>
      )}
    </>
  );
}
