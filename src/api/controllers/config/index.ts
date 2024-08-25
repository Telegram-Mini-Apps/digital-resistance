import { Express } from 'express';
import { csrfTokenMiddleware, verifyCsrfToken } from '../../middleware/csrfProtection'
import { get as getConfig } from './route';

export const attachConfigController = (app: Express) => {
    app.get('/api/config', verifyCsrfToken, getConfig);
}
