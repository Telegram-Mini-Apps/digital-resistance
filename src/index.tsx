import React from 'react';
import ReactDOM from 'react-dom/client';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Root } from './components/Root';
import { mockEnv } from './mockEnv';
import { init } from './init';

import './styles/globals.scss';


const publicUrl = process.env.PUBLIC_URL;
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

const mixpanelToken = process.env.REACT_APP_MIXPANEL_TOKEN;
if (!mixpanelToken) {
  throw new Error('REACT_APP_MIXPANEL_TOKEN is missing');
}

const sentryDsn = process.env.REACT_APP_SENTRY_DSN;
if (!sentryDsn) {
  throw new Error('REACT_APP_SENTRY_DSN is missing');
}

// Mock the environment in case, we are outside Telegram. Just for development purposes.
// It is important, to mock the environment only for development purposes. When building the
// application, import.meta.env.DEV will become false, and the code inside will be tree-shaken,
// so you will not see it in your final bundle.
if (process.env.NODE_ENV === 'development') {
  // You can comment this line of code in case, you are developing only inside Telegram.
  mockEnv();
}

// Initialize the SDK and all libraries used.
const { platform, initData, initDataRaw } = retrieveLaunchParams();

init({
  debug: process.env.NODE_ENV !== 'production',
  mixpanel: {
    token: mixpanelToken,
    userId: initData && initData.user && initData.user.id || undefined,
    platform,
  },
  sentry: {
    dsn: sentryDsn,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root
      apiBaseUrl={apiBaseUrl}
      localesBaseUrl={`${publicUrl}/locales`}
    />
  </React.StrictMode>,
);