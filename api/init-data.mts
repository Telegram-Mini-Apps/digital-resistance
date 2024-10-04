import type { Response } from 'express';
import type { InitData } from '@telegram-apps/init-data-node';

const REQUEST_LOCALS_KEY = '__TELEGRAM-INIT-DATA';

/**
 * Gets init data from the request context.
 * @param res - Request object.
 * @throws {Error} Init data is missing
 */
export function getInitData(res: Response): InitData {
  const value = res.locals[REQUEST_LOCALS_KEY];
  if (!value) {
    throw new Error('Init data is missing');
  }
  return value;
}

/**
 * Sets init data in the request context.
 * @param res - Response object.
 * @param initData - init data.
 */
export function setInitData(res: Response, initData: InitData): void {
  res.locals[REQUEST_LOCALS_KEY] = initData;
}