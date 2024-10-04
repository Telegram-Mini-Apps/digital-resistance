import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
} from '@telegram-apps/sdk-react';
import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

interface InitMixpanelOptions {
  debug: boolean;
  platform: string;
  token: string;
  userId?: number;
}

interface InitSentryOptions {
  debug: boolean;
  dsn: string;
}

function initSentry({ dsn, debug }: InitSentryOptions): void {
  Sentry.init({
    dsn,
    debug,
    integrations: [
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^https:\/\/digitalresistance\.me/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

function initMixpanel({ userId, token, platform, debug }: InitMixpanelOptions): void {
  mixpanel.init(token, {
    track_pageview: true,
    persistence: 'localStorage',
    debug,
  });
  mixpanel.set_group('Platform', platform);
  userId && mixpanel.identify(userId.toString());
}

function initSDKComponents() {
  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc. Also, configure
  // the package.
  initSDK();

  // Mount all components used in the project.
  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();
  viewport.mount().catch(e => {
    console.error('Something went wrong mounting the viewport', e);
  });

  // Define components-related CSS variables.
  viewport.bindCssVars();
  miniApp.bindCssVars();
  themeParams.bindCssVars();
}

/**
 * Initializes the application and configures its dependencies.
 */
export function init({ debug, mixpanel, sentry }: {
  debug: boolean;
  mixpanel: Omit<InitMixpanelOptions, 'debug'>;
  sentry: Omit<InitSentryOptions, 'debug'>;
}): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize everything.
  initSDKComponents();
  initMixpanel({ ...mixpanel, debug });
  initSentry({ ...sentry, debug });

  // Add Eruda if needed.
  debug && import('eruda').then((lib) => lib.default.init()).catch(e => {
    console.error('Unable to load eruda', e);
  });
}