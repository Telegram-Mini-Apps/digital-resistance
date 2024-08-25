import mixpanel from 'mixpanel-browser';
import React, { useState } from 'react';
import { TWAApplication } from '../../types/entities';
import { debounce } from '../utils/common';

export const useDataSource = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Array<TWAApplication>>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const fetch = async (value: string) => {
        try {
            const data = await getApplications(value);

            mixpanel.track("Search", {
                "request": value,
                "keywords": value.split(" "),
            });

            setData(data);
            setIsLoading(false);
            setIsCompleted(true);
        } catch (e) {
            setIsLoading(false);
            setIsCompleted(true);
        }
    }

    const reset = () => {
        setData([]);
        setIsCompleted(false);
        setIsStarted(false);
    }

    const debouncedFetcher = React.useMemo(() => debounce(fetch, 500), []);

    const requestData = React.useCallback((value: string) => {
        setIsLoading(true);
        setIsStarted(true);
        setIsCompleted(false);

        debouncedFetcher(value);
    }, [debouncedFetcher])

    return {
        data,
        reset,
        isLoading,
        isStarted,
        isCompleted,
        requestData,
    }
}

export const getApplications = async (value?: string): Promise<Array<TWAApplication>> => {
    let filters = {
    }

    try {
        const ecosystemKeyName = window?.ecosystem

        if (ecosystemKeyName) {
            filters = {
                ecosystem: {
                    $eq: ecosystemKeyName
                }
            }
        }
    } catch (e) {
    }

    filters = {
        ...filters,
        platforms: {
            name: {
                $eq: window.Telegram.WebApp.platform,
            }
        },
    }

    const response = await fetch(
        "/api/applications",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value, filters }),
        },
    );

    const { data } = await response.json();

    return data;
}
