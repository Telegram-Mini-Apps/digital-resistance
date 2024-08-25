import { getAttributeFromSearch } from './common';
import { ECOSYSTEM_KEY_NAME, TG_WEB_APP_START_PARAM } from './constatns';

const VALID_ECO_KEYS = ['ton'];

export const getEcoStartAppParam = () => {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has(TG_WEB_APP_START_PARAM)) {
    const tgWebAppStartParam = searchParams.get(TG_WEB_APP_START_PARAM);

    if (tgWebAppStartParam) {
      const params = tgWebAppStartParam.split('-');
      const section = getAttributeFromSearch(params, ECOSYSTEM_KEY_NAME);

      if (section !== null && VALID_ECO_KEYS.includes(section)) {
        return section;
      }
    }
  }
};
