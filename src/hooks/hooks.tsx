import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';
import { TelegramWebApps } from '../../types/common';
import isMobile from '../utils/isMobile';

export const useMixpanel = () => {
    useEffect(() => {
        mixpanel.init(
            process.env.REACT_APP_MIXPANEL_TOKEN!,
            {
                track_pageview: true,
                persistence: 'localStorage',
            }
        )

        mixpanel.set_group('Platform',  getPlatform());

        try {
            const initData =
                window.Telegram?.Utils?.urlParseQueryString<TelegramWebApps.WebAppInitData>(window.Telegram?.WebApp?.initData);

            if (initData.user) {
                const user = JSON.parse(initData.user);

                if (user) {
                    mixpanel.identify(String(user.id));
                }
            }
        } catch (e) {
        }

        mixpanel.track_links('a', 'Link Click');
    }, [])

    return mixpanel;
}

export const useCloudStorage = () => {
    return {
        getItemFromStorage,
        setItemToStorage,
    }
}

export function getItemFromStorage<T>(key: string): Promise<T> {
    return new Promise((resolve, reject) => {
        try {
            window.Telegram?.WebApp?.CloudStorage.getItem(
                key,
                (err, data) => {
                    if (!err) {
                        resolve(data as T);
                    } else {
                        reject(err);
                    }
                })
        } catch (error) {
            reject(error);
        }
    })
}

export function setItemToStorage(key: string, value: any) {
    return new Promise((resolve, reject) => {
        try {
            window.Telegram?.WebApp?.CloudStorage.setItem(key, value, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        } catch (error) {
            reject(error);
        }
    })
}

const getPlatform = () => {
    try {
        let platform: string = window.Telegram?.WebApp?.platform;

        if (platform === "unknown") {
            platform = isMobile(navigator).any ? "tapps_mobile_web" : "tapps_web";
        }

        return  platform;
    } catch (error) {
        return 'unknown';
    }
}
