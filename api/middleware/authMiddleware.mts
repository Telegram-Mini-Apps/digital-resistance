import type { RequestHandler } from 'express';
import { isValid, parse } from '@telegram-apps/init-data-node';

import { setInitData } from '../init-data.mjs';

/**
 * @return Middleware performing authorization.
 * @param botToken - Telegram Bot token.
 * @param expiresIn - Telegram init data expiration time in seconds.
 */
export function authMiddleware(botToken: string, expiresIn: number): RequestHandler {
  return (req, res, next) => {
    const header = req.header('x-init-data');
    if (header && isValid(header, botToken, { expiresIn })) {
      // Set init data in the request, so we could reuse it in the future.
      setInitData(res, parse(header));
      return next();
    }
    res.status(403).send('Unauthorized');
  };
}