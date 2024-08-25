import { AppConfigData, TWACategory } from '../../types/entities';

export const TELEGRAM_CHANNEL_URL = 'https://t.me/trendingapps';
export const SUBMIT_APP_URL = 'https://t.me/app_moderation_bot';
export const FOR_DEVELOPERS_URL = 'https://tapps.center/Telegram_Ecosystem.pdf';
export const APP_TITLE = 'Telegram Apps Center';
export const APP_DESCRIPTION = 'Explore Apps Built For Telegram.';
export const PRIVACY_POLICY_URL = 'https://telegra.ph/Telegram-Apps-Center-Privacy-Policy-07-26';

export const METADATA = {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  applicationName: 'Telegram Apps',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: 'https://tapps.center/',
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    siteName: 'tapps.center',
    images: [{
      url: 'https://www.tapps.center/og.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    title: APP_TITLE,
    card: 'summary_large_image',
    images: [{
      url: 'https://www.tapps.center/og.png',
      width: 1200,
      height: 630,
    }],
  },
};

export const DEFAULT_APP_CONFIG: AppConfigData = {
  open_app_in_chat: false,
  recently_launched_enabled: {
    data: [
      {
        id: 1,
        attributes: {
          name: 'android',
        },
      },
      {
        id: 2,
        attributes: {
          name: 'android_x',
        },
      },
      {
        id: 3,
        attributes: {
          name: 'ios',
        },
      },
      {
        id: 4,
        attributes: {
          name: 'macos',
        },
      },
      {
        id: 5,
        attributes: {
          name: 'tdesktop',
        },
      },
      {
        id: 6,
        attributes: {
          name: 'weba',
        },
      },
      {
        id: 6,
        attributes: {
          name: 'webk',
        },
      },
      {
        id: 6,
        attributes: {
          name: 'unigram',
        },
      },
      {
        id: 6,
        attributes: {
          name: 'unknown',
        },
      },
    ],
  },
};

export const enum APIResponse {
  OK = 'ok',
  ERROR = 'error',
  FALSE = 'false'
}

export const ALL_CATEGORIES_KEY = 'All';
export const RECENT_CATEGORIES_KEY = 'Recent';
export const RECENT_KEY_NAME = 'recent';
export const SECTION_KEY_NAME = 'section';

export const ECOSYSTEM_KEY_NAME = 'ecosystem';

export const APP_KEY_NAME = 'app';

export const TWA_ROOT_PATH = '/twa';

export const TWA_APPLICATIONS_ROOT_PATH = '/applications';
export const ALL_CATEGORIES_PATH = '';
export const RECENT_CATEGORIES_PATH = `/${RECENT_KEY_NAME}`;

export const APP_SCREEN_PATH = '/application';

export const JETTON_INFO_BASEPATH = 'https://beta.redoubt.online/feed/jettons';

export const ALL_CATEGORIES_TAB: TWACategory = {
  id: -1,
  attributes: {
    title: ALL_CATEGORIES_KEY,
    path: ALL_CATEGORIES_PATH,
    order: 0,
  },
};
export const TG_WEB_APP_START_PARAM = 'tgWebAppStartParam';
export const TG_START_APP_PARAM = 'startapp';
