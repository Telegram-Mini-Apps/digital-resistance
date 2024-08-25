import { ImageData } from './Blocks'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type TWARankings = {
    attributes: {
        applications: {
            data: TWAApplication[],
        },
    }
}

export type TWALaunchHistoryItem = {
    app_id: "20",
    launched_at: "2023-11-21 08:03:12"
}

export type TWAApplicationImage = {
    attributes: {
        url: string,
        name: string,
        width: number,
        height: number,
    }
};

export type TWAApplication = {
    id: number,
    attributes: {
        title: string,
        description: string,
        url: string,
        path: string,
        createdAt: string,
        ecosystem?: "ton",
        long_description: string,
        editors_choice: boolean | null,
        icon: {
            data: TWAApplicationImage | null,
        },
        screenshots: {
            data: Array<TWAApplicationImage> | null
        },
        categories: {
            data: Array<TWACategory> | null,
        },
        poster?: {
            data: TWAApplicationImage | null,
        },
        jetton?: {
            data: Jetton | null
        },
        webapp_url?: string | null,
        startParam?: string,
        platforms: {
            data: Platform[]
        }
    },
}

export interface AlertData {
    id: number;
    attributes: {
        title: string;
        content: string;
        key: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        icon: {
            data: ImageData;
        };
    };
}

export type Jetton = {
    id: number,
    attributes: {
        address: string,
        createdAt: string,
        publishedAt: string,
        ticker: string,
        updatedAt: string,
    },
}

export type TWACategory = {
    id: number,
    attributes: {
        title: string,
        path: string,
        order: number | null,
        compact?: boolean,
        alert?: {
            data: AlertData | null
        },
        icon?: {
            data: TWAApplicationImage | null,
        },
        applications? : {
            data: Array<TWAApplication>,
        }
    },
}

export type AppType = "tma" | "bot";

export type Platform = {
    id: number,
    attributes: {
        name: string,
        createdAt?: string,
        updatedAt?: string,
    }
}

export type AppConfigData = {
    open_app_in_chat: boolean,
    recently_launched_enabled: {
        data: Array<Platform>,
    },
}

export type AppConfig = {
    id: number,
    attributes: AppConfigData,
}

export type NavigationConfig = {
    id: number,
    attributes: {
        categories: {
            data: Array<TWACategory>,
        };
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
    }
}

export type Navigation = "client" | "server";

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
    /** A string used to identify an i18n locale */
    I18NLocaleCode: any;
};

