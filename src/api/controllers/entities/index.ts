import apicache from 'apicache';

let cache = apicache.middleware;

import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { verifyCsrfToken } from '../../middleware/csrfProtection';

export const attachEntitiesProxy = (app: Express) => {
  app.use(verifyCsrfToken);
  app.use(cache('5 minutes'));

  app.use(
    '/api/entities/',
    createProxyMiddleware({
      target: process.env.STRAPI_BASEPATH,
      pathRewrite: {
        '/api/entities/': '/api/',
      },
      headers: {
        Host: process.env.STRAPI_HOST!,
      },
      ...logs,
    }),
  );
};

const logs = {
  onError: function onError(err: any, req: any, res: {
    status: (arg0: number) => void;
    json: (arg0: { error: string; }) => void;
  }) {
    console.error(err);
    res.status(500);
    res.json({ error: 'Error when connecting to remote server.' });
  },
};
