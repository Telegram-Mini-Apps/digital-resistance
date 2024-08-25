import { Express } from 'express';
import { verifyCsrfToken } from '../../middleware/csrfProtection'
import { post as recordAnalytics } from './route';

export const attachAnalyticsController = (app: Express) => {
    app.post('/api/analytics', verifyCsrfToken, recordAnalytics);
}
