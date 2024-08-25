import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { DataProvider } from '../../dataSource/DataContext/DataContext';
import { NavigationEvents } from './NavigationEvents';

import { hideLoader } from '../../utils/ui';

export default function Layout() {
    useEffect(() => {
        void hideLoader();
    }, []);

    return (
        <>
            <NavigationEvents/>
            <ScrollRestoration/>
            <DataProvider>
                <Outlet/>
            </DataProvider>
        </>
    );
}
