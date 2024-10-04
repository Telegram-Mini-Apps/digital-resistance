import type { RequestHandler } from 'express';
import helmet from 'helmet';

/**
 * @returns Middleware, configuring CSP.
 */
export function cspMiddleware(): RequestHandler {
  // See: https://www.npmjs.com/package/helmet
  return helmet({
    contentSecurityPolicy: {
      directives: {
        // Specifies valid sources for JavaScript
        // See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
        'script-src': [
          '\'self\'',
          'tganalytics.xyz',
        ],
        // Restricts the URLs which can be loaded using script interfaces.
        // See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
        'connect-src': [
          '\'self\'',
          'api-js.mixpanel.com',
          'graphql.redoubt.online',
          'tganalytics.xyz',
        ],
        // Specifies valid sources of images and favicons.
        // See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
        'img-src': [
          '\'self\'',
          'tganalytics.xyz',
        ],
        // Valid parents that may embed a page using iframe. This prevents sources other than
        // specified from inserting the application via iframe tag.
        // See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
        'frame-ancestors': [
          'web.telegram.org',
          'tganalytics.xyz',
        ],
        // Valid sources for Worker, SharedWorker, or ServiceWorker scripts.
        // See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src
        'worker-src': [
          '\'self\'',
          's.tontmaservice.xyz',
          'blob:',
          'tganalytics.xyz',
        ],
      },
    },
    xFrameOptions: false,
  });
}