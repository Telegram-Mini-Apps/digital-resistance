import qs from 'qs';

export interface IApiResponseType<T> {
    data?: T | null,
    meta?: Record<any, any> | null,
    error?: string | null,
}

export async function getEntitiesWithStringQuery<T>(url: string): Promise<IApiResponseType<T>> {
    return await makeStrapiRequest(url);
}

export async function getEntities<T>(requestedEntity: string, queryArgs = {}): Promise<IApiResponseType<T>> {
    const query = {
        pagination: {
            limit: -1,
        },
        populate: [
            'icon',
            'categories',
            'poster',
            'alert',
            'alert.icon',
        ],
        ...queryArgs,
    }

    const requestUrl = `${requestedEntity}?${qs.stringify(query)}`;

    return await makeStrapiRequest<T>(requestUrl);
}

export async function getEntitiesFromProxy<T>(requestedEntity: string, queryArgs = {}): Promise<IApiResponseType<T>> {
    const query = {
        pagination: {
            limit: -1,
        },
        populate: [
            'icon',
            'categories',
            'poster',
        ],
        ...queryArgs,
    }

    const requestUrl = `${requestedEntity}?${qs.stringify(query)}`;

    return await makeProxyRequest<T>(requestUrl);
}

export async function getEntity<T>(requestedEntity: string, queryArgs = {}): Promise<IApiResponseType<T>> {
    const query = {
        ...queryArgs,
    }

    const requestUrl = `${requestedEntity}?${qs.stringify(query, {
        encodeValuesOnly: true,
    })}`;

    return await makeStrapiRequest<T>(requestUrl);
}

export const makeProxyRequest = async <T>(path: string, requestOptions: RequestInit = {}): Promise<IApiResponseType<T>> => {
    try {
        const { headers, ...restOptions } = requestOptions;
        const serverUrl = process.env.REACT_APP_STRAPI_PROXY;
        const response = await fetch(
            `${serverUrl}/${path}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_STRAPI_TOKEN}`,
                    ...headers,
                },
                ...restOptions,
            },
        );

        const json = await response.json();

        if (response.hasOwnProperty("error")) {
            const { error } = json;

            throw error;
        }

        const { data, meta } = json;

        return {
            data,
            meta,
            error: null
        };
    } catch (error: string | any) {
        return {
            data: null,
            meta: null,
            error,
        };
    }
}

export const makeStrapiRequest = async <T>(path: string, requestOptions: RequestInit = {}): Promise<IApiResponseType<T>> => {
    try {
        const { headers, ...restOptions } = requestOptions;
        const serverUrl = process.env.REACT_APP_INTERNAL_URL;
        const response = await fetch(
            `${serverUrl}/${path}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_STRAPI_TOKEN}`,
                    ...headers,
                },
                ...restOptions,
            },
        );

        const json = await response.json();

        if (response.hasOwnProperty("error")) {
            const { error } = json;

            throw error;
        }

        const { data, meta } = json;

        return {
            data,
            meta,
            error: null
        };
    } catch (error: string | any) {
        return {
            data: null,
            meta: null,
            error,
        };
    }
}
