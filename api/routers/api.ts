import { Router } from 'express';

import { getPetitionsRouter } from './petitions.js';

/**
 * @returns A router to use for the API route.
 */
export function getApiRouter(): Router {
  const router = Router();
  router.use('/petitions', getPetitionsRouter());
  return router;
}