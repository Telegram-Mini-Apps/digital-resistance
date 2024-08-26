import i18n from 'i18next';

import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { getItemFromStorage } from '../../hooks/hooks';

export function initI18n() {
  return i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .use({
      type: 'languageDetector',
      async: true,
      async detect(callback: (locale: string) => void) {
        Promise
          .race([
            getItemFromStorage<string>('locale'),
            new Promise<never>((_, rej) => {
              setTimeout(rej, 1000);
            }),
          ])
          .catch(() => {
            const codeFromGlobal = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
            return codeFromGlobal && [
              'en', 'ru', 'es', 'fa', 'fr', 'hi', 'ko', 'ru', 'zh',
            ].includes(codeFromGlobal)
              ? codeFromGlobal
              : 'en';
          })
          .then(callback);
      },
    })
    .init({
      debug: true,
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    });
}
