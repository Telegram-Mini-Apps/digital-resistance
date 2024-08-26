import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initSentry } from './utils/init/sentry';

import 'swiper/css';
import './styles/globals.scss';

initSentry();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // TODO: Temporarily disabling strict mode as long as we use async operation in useEffect
  //  improperly. Will be back when we write useAsync hook.
  // <React.StrictMode>
  <App/>,
  // </React.StrictMode>,
);
