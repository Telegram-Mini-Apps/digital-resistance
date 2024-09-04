import i18n from 'i18next';

import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export function initI18n() {
  return i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .use({
      type: 'languageDetector',
      async: true,
      detect(callback: (locale: string) => void) {
        const codeFromGlobal = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
        callback(
          codeFromGlobal && [
            'en', 'ru', 'es', 'fa', 'fr', 'hi', 'ko', 'ru', 'zh',
          ].includes(codeFromGlobal)
            ? codeFromGlobal
            : 'en',
        );
      },
    })
    .init({
      debug: true,
      backend: {
        loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}.json`,
      },
    });
}
