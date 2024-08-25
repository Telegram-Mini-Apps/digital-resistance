import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RECENT_CATEGORIES_PATH } from '../../utils/constatns';

export function NavigationEvents() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevRoute = usePrevious(location);

  const handleBackButtonClick = useCallback(() => {
    if (location.pathname === RECENT_CATEGORIES_PATH) {
      navigate('/');

      return;
    }

    navigate(-1);
    controlBackButton();
  }, [location]);

  const controlBackButton = () => {
    if (location.pathname === '/') {
      window.Telegram?.WebApp?.BackButton.hide();
      window.Telegram?.WebApp?.BackButton.offClick(handleBackButtonClick);
    } else {
      if (!window.Telegram?.WebApp?.BackButton.isVisible) {
        window.Telegram?.WebApp?.BackButton.show();
        window.Telegram?.WebApp?.BackButton.onClick(handleBackButtonClick);
      }
    }
  };

  const controlSettingsButton = () => {
    if (!window.Telegram?.WebApp.SettingsButton.isVisible) {
      window.Telegram?.WebApp?.SettingsButton.show();
      window.Telegram.WebApp.SettingsButton.onClick(() => {
        navigate('/settings');
      });
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (prevRoute?.pathname !== location?.pathname) {
      controlBackButton();
    }

    controlSettingsButton();
  }, [handleBackButtonClick, location, prevRoute]);

  return null;
}

function usePrevious(value: any) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
