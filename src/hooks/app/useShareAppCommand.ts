import { TWAApplication } from '../../../types/entities';
import { openTelegramLink } from '../../utils/common';

export const useShareAppCommand = () => {
  const createShareAppCommand = (application: TWAApplication | null | undefined, category?: string) => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');

    if (!application) return;

    const { attributes } = application;

    const url =
      encodeURIComponent(`https://t.me/tapps_bot/center?startapp=app_${attributes.path}`);
    const text = encodeURIComponent(attributes.title);
    const hashtags = category ? `hashtags=${encodeURIComponent(category)}` : '';

    openTelegramLink(`https://t.me/share/url?url=${url}&text=${text}&${hashtags}`);
  };

  return {
    createShareAppCommand,
  };
};
