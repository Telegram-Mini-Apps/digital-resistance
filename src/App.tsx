import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from './app/_components/Layout';
import IndexPage from './app/pages/IndexPage/IndexPage';

import { TWA_ROOT_PATH } from './utils/constatns';

import 'swiper/css';
import './styles/globals.scss';

function App() {
    const router = useMemo(() => createBrowserRouter([{
        id: 'root',
        element: <Layout/>,
        children: [
            { path: '/', element: <IndexPage/> },
            { path: '*', element: <Navigate to="/"/> },
        ],
    }], { basename: TWA_ROOT_PATH }), []);

    return <RouterProvider router={router}/>;
}

export default App;
