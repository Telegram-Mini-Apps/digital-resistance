import { Express } from 'express';
import { checkInitData } from '../../middleware/checkInitData'
import { verifyCsrfToken } from '../../middleware/csrfProtection'
import { post as getApplications } from './route';
import { post as saveLaunch } from './launch/route';
import { post as open } from './open/route';
import { post as getRecentlyLaunched } from './recentlyLaunched/route';
import { post as saveRecentlyLaunched } from './recentlyLaunched/save/route';

export const attachApplicationsController = (app: Express) => {
    app.post('/api/applications', verifyCsrfToken, getApplications);
    app.post('/api/applications/launch', verifyCsrfToken, saveLaunch);
    app.post('/api/applications/open', verifyCsrfToken, open);
    app.post(
        '/api/applications/recentlyLaunched',
        verifyCsrfToken,
        checkInitData({
            expiresIn: 60*60*1000,
            tokenHashed: false,
        }),
        getRecentlyLaunched,
    );
    app.post(
        '/api/applications/recentlyLaunched/save',
        verifyCsrfToken,
        checkInitData({
            expiresIn: 60*60*1000,
            tokenHashed: false,
        }),
        saveRecentlyLaunched,
    );
}
