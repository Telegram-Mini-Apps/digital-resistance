import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { LocaleProvider } from './dataSource/LocaleContext/LocaleContext'
import { initSentry } from './utils/init/sentry';

initSentry();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LocaleProvider>
            <App/>
        </LocaleProvider>
    </React.StrictMode>,
);
