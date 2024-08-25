import i18n from 'i18next';

import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { getItemFromStorage } from '../../hooks/hooks';

export const enum LOCALES {
  EN = 'en',
  RU = 'ru',
  FA = 'fa',
  UK = 'uk',
  VI = 'vi',
  TR = 'tr',
  ID = 'id',
  UZ = 'uz',
  ES = 'es',
  PT = 'pt',
  FR = 'fr',
  DE = 'de',
  ZH = 'zh',
}

export const locales = {
  [LOCALES.EN]: {
    title: 'English',
    localName: 'English',
  },
  [LOCALES.RU]: {
    title: 'Russian',
    localName: 'Русский',
  },
  [LOCALES.FA]: {
    title: 'Farsi',
    localName: 'فارسی',
  },
  [LOCALES.UK]: {
    title: 'Ukrainian',
    localName: 'Українська',
  },
  [LOCALES.VI]: {
    title: 'Vietnamese',
    localName: 'Tiếng Việt',
  },
  [LOCALES.TR]: {
    title: 'Turkish',
    localName: 'Türkçe',
  },
  [LOCALES.ID]: {
    title: 'Indonesian',
    localName: 'Bahasa Indonesia',
  },
  [LOCALES.UZ]: {
    title: 'Uzbek',
    localName: 'O‘zbek',
  },
  [LOCALES.ES]: {
    title: 'Spanish',
    localName: 'Español',
  },
  [LOCALES.PT]: {
    title: 'Portuguese',
    localName: 'Português',
  },
  [LOCALES.FR]: {
    title: 'French',
    localName: 'Français',
  },
  [LOCALES.DE]: {
    title: 'German',
    localName: 'Deutsch',
  },
  [LOCALES.ZH]: {
    title: 'Chinese',
    localName: '中文',
  },
};

type I18nCallback = (locale: string) => void;

export function initI18n() {
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .use({
      type: 'languageDetector',
      async: true,
      detect: async function (callback: I18nCallback) {
        const localeFromGlobal = getLanguageCodeFromStartParams();
        const res = await getItemFromStorage<string>('locale').catch(() => null);
        const locale = res || localeFromGlobal || LOCALES.EN;

        callback(locale);
      },
    })
    .init({
      debug: true,
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    });
}

function getLanguageCodeFromStartParams() {
  const codeFromGlobal = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;

  if (codeFromGlobal && Object.keys(locales).includes(codeFromGlobal)) {
    return codeFromGlobal;
  }
}
