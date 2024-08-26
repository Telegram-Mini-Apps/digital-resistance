import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { DataProvider } from '../../dataSource/DataContext/DataContext';
import { initI18n } from '../../dataSource/LocaleContext/i18n';

import { hideLoader } from '../../utils/ui';

export default function Layout() {
  const [loadingI18n, setLoadingI18n] = useState(true);

  useEffect(() => {
    initI18n()
      .catch(console.error)
      .finally(() => setLoadingI18n(false));
  }, []);

  useEffect(() => {
    if (!loadingI18n) {
      // We are not hiding the loader on purpose, because change of loadingI18n to
      // false will also lead to rendering the Outlet component, which may be the reason
      // of layout shifts (due to loading images, for example).
      const timeoutId = setTimeout(hideLoader, 100);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [loadingI18n]);

  return (
    <>
      <ScrollRestoration/>
      <DataProvider>
        {!loadingI18n && <Outlet/>}
      </DataProvider>
    </>
  );
}
