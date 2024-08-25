import React, { useEffect, useLayoutEffect } from 'react';
import get from 'lodash.get';
import { TelegramWebApps } from '../../types/common';

export const useOnMount = (cb: Function) => {
  useEffect(() => {
    cb();
  }, [cb]);
};

export const setupThemeValue = (key: string, themeData: TelegramWebApps.ThemeParams) => {
  const prevValue = document.documentElement.style.getPropertyValue(`--${key}`);
  const nextValue = get(themeData, key, prevValue);

  document.documentElement.style.setProperty(`--${key}`, nextValue);
};

export const useTWAPlatform = () => {
  const [
    platform,
    setPlatform,
  ] = React.useState<TelegramWebApps.Platform>(
    typeof document !== 'undefined'
      ? document.documentElement.style.getPropertyValue('--app_platform') as TelegramWebApps.Platform
      : 'unknown' as TelegramWebApps.Platform,
  );

  useLayoutEffect(() => {
    const platformFromGlobal = window.Telegram?.WebApp?.platform;

    setPlatform(platformFromGlobal);
  }, []);

  return platform;
};

export const useTWAUser = (): TelegramWebApps.WebAppUser | undefined => {
  try {
    const initData = window.Telegram?.Utils?.urlParseQueryString<TelegramWebApps.WebAppInitData>(
      window.Telegram?.WebApp?.initData,
    );

    if (initData.user) {
      return JSON.parse(initData.user);
    }
  } catch (e) {
  }
};
