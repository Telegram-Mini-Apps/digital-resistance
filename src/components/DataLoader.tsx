import { PropsWithChildren, useEffect, useMemo } from 'react';
import {
  hapticFeedbackNotificationOccurred,
  initDataRaw,
  initDataUser,
  useSignal,
} from '@telegram-apps/sdk-react';
import useSWR from 'swr';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { useConfig } from '../providers/ConfigProvider/context';
import { DataProvider } from '../providers/DataProvider/DataProvider';

export function DataLoader(props: PropsWithChildren) {
  const config = useConfig();

  // Init data raw representation.
  const initData = useSignal(initDataRaw) || '';

  // Init data user information.
  const user = useSignal(initDataUser);

  // Translations locale.
  const locale = useMemo(() => {
    const languageCode = user && user.languageCode || 'en';
    return ['en', 'ru', 'es', 'fa', 'fr', 'hi', 'ko', 'ru', 'zh'].includes(languageCode)
      ? languageCode
      : 'en';
  }, [user]);

  // Retrieve the petition information.
  const { data: petition, isLoading: isPetitionLoading } = useSWR<{
    id: string;
    title: string;
    image_url: string;
    description: string;
    created_at: string;
    is_signed_by_user: boolean;
    signatures_count: number;
  }>('petition', () => {
    return fetch(`${config.apiBaseUrl}/api/petitions/freedurov`, {
      headers: { 'x-init-data': initData },
    })
      .then(r => r.json())
      .then(r => {
        if (r.error) {
          throw new Error(r.message);
        }
        hapticFeedbackNotificationOccurred('success');
        return r.data;
      })
      .catch(e => {
        hapticFeedbackNotificationOccurred('error');
        throw e;
      });
  }, { revalidateOnFocus: false });

  // Load the application translations.
  const { isLoading: isI18nLoading } = useSWR('i18n', () => {
    console.log('called')
    return i18n.use(initReactI18next).use(HttpBackend).init({
      debug: true,
      lng: locale,
      backend: {
        loadPath: `${config.localesBaseUrl}/{{lng}}.json`,
      },
    });
  }, { revalidateOnFocus: false });

  // When loading is successful, remove the application loader.
  useEffect(() => {
    if (isI18nLoading || isPetitionLoading || !petition) {
      return;
    }

    // TODO: What if an error occurred?

    const loader = document.querySelector<HTMLDivElement>('.appLoader');
    if (!loader) {
      return;
    }
    const timeoutId = setTimeout(() => {
      loader
        .animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
        .finished
        .then(() => {
          loader.remove();
        });
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isI18nLoading, isPetitionLoading, petition]);

  return !petition || isI18nLoading || isPetitionLoading ? null : (
    <DataProvider
      signaturesCount={petition.signatures_count}
      isSigned={petition.is_signed_by_user}
    >
      {props.children}
    </DataProvider>
  );
}