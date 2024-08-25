import { WebApp as TwaWebApp } from '@twa-dev/types';

import 'react';

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

export declare namespace TelegramWebApps {
    interface SDK {
        WebApp: WebApp;
        Utils: Utils;
    }

    interface Utils {
        urlParseQueryString: <T>(url: string) => T;
    }

    /**
     * Available app events.
     */
    type EventType = "themeChanged" | "viewportChanged" | "mainButtonClicked";

    type ButtonType = 'default' | 'ok' | 'close' | 'cancel' | 'destructive';

    type Platform = 'macos' | 'android' | 'ios' | 'weba' | 'web' |'tdesktop' | 'unknown';

    type PopupButton = {
        id: string,
        type: ButtonType,
        text: string,
    }

    type PopupParamsType = {
        title: string,
        message: string,
        buttons: Array<PopupButton>
    }

    // @ts-ignore
    interface WebApp extends TwaWebApp {
        platform: Platform;
        /**
         * A method that requests the popup view.
         */
        openTelegramLink(link: string): void;
        /**
         * A method that requests the popup view.
         */
        setHeaderColor(color: string): void;
        /**
         * A method that sets the app background color.
         */
        setBackgroundColor(color: string): void;
    }

    interface ThemeParams {
        /**
         * Background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-bg-color).
         */
        bg_color?: string;
        /**
         * Main text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-text-color).
         */
        text_color?: string;
        /**
         * Hint text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-hint-color).
         */
        hint_color?: string;
        /**
         * Link color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-link-color).
         */
        link_color?: string;
        /**
         * Button color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-button-color).
         */
        button_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-button-text-color).
         */
        button_text_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-bg-color).
         */
        section_bg_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-accent-text-color).
         */
        accent_text_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-subtitle-text-color).
         */
        subtitle_text_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-destructive-text-color).
         */
        destructive_text_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also, available as the CSS variable var(--tg-theme-header-bg-color).
         */
        header_bg_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also, available as the CSS variable var(--tg-theme-section-header-text-color).
         */
        section_header_text_color?: string;
    }

    interface WebAppInitData {
        /**
         * A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method.
         */
        query_id?: string;
        /**
         * An object containing data about the current user.
         */
        user?: string;
        /**
         * An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for Web Apps launched via the attachment menu.
         */
        receiver?: WebAppUser;
        /**
         * The value of the startattach parameter, passed via link. Only returned for Web Apps when launched from the attachment menu via link.
         */
        start_param?: string;
        /**
         * Unix time when the form was opened.
         */
        auth_date?: number;
        /**
         * A hash of all passed parameters, which the bot server can use to check their validity.
         */
        hash?: string;
    }

    interface WebAppUser {
        /**
         * A unique identifier for the user or bot.
         */
        id?: number;
        /**
         * True, if this user is a bot. Returns in the receiver field only.
         */
        is_bot: boolean;
        /**
         * First name of the user or bot.
         */
        first_name: string;
        /**
         * Last name of the user or bot.
         */
        last_name?: string;
        /**
         * Username of the user or bot.
         */
        usernames?: string;
        /**
         * IETF language tag of the user's language. Returns in user field only.
         */
        language_code?: string;
        /**
         * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
         */
        photo_url?: string;
    }

    interface MainButton {
        /**
         * Current button text. Set to CONTINUE by default.
         */
        text: string;
        /**
         * 	Current button color. Set to themeParams.button_color by default.
         */
        color: string;
        /**
         * Current button text color. Set to themeParams.button_text_color by default.
         */
        textColor: string;
        /**
         * Shows whether the button is visible. Set to false by default.
         */
        isVisible: boolean;
        /**
         * Shows whether the button is active. Set to true by default.
         */
        isActive: boolean;
        /**
         * Readonly. Shows whether the button is displaying a loading indicator.
         */
        isProgressVisible: boolean;
        /**
         * A method to set the button text.
         */
        setText(text: string): MainButton;
        /**
         * A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
         */
        onClick(callback: Function): MainButton;
        /**
         * A method to make the button visible.
         */
        show(): MainButton;
        /**
         * A method to hide the button.
         */
        hide(): MainButton;
        /**
         * A method to enable the button.
         */
        enable(): MainButton;
        /**
         * A method to disable the button.
         */
        disable(): MainButton;
        /**
         * A method to show a loading indicator on the button.
         */
        showProgress(leaveActive: boolean): MainButton;
        /**
         * A method to hide the loading indicator.
         */
        hideProgress(): MainButton;
        /**
         * A method to set the button parameters.
         */
        setParams(params: MainButtonParams): MainButton;
    }

    interface MainButtonParams {
        /**
         * Button text.
         */
        text?: string;
        /**
         * Button color.
         */
        color?: string;
        /**
         * Button text color.
         */
        text_color?: string;
        /**
         * Enable the button.
         */
        is_active?: boolean;
        /**
         * Show the button.
         */
        is_visible?: boolean;
    }
}

declare global {
    interface Window {
        Telegram: TelegramWebApps.SDK,
        historyLength: number;
        isLoading: boolean;
        isRecentlyLaunchedEnabled: boolean;
        isRecentlyLaunchedExists: boolean;
        i18nLocale: string;
        ejectLoader: () => void;
        ecosystem?: '';
    }

    const Telegram: TelegramWebApps.SDK;
}

