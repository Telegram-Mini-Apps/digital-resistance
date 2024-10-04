import { Router } from 'express';

/**
 * @returns A router to process petitions-related routes.
 */
export function getPetitionsRouter(): Router {
  // This data is just a mock, you should remove it in production.
  let isSigned = false;
  let signaturesCount = 0;

  const router = Router();

  router.get('/freedurov', async (_, res) => {
    // If needed, we can retrieve user information here.
    // const initData = getInitData(res);

    // Let's imagine, we are making a request here to the Backend API and receive a response.
    await new Promise(r => setTimeout(r, 500));

    // Then, we should return it to the client.
    res.json({
      data: {
        is_signed_by_user: isSigned,
        signatures_count: signaturesCount,
      },
      error: null,
    });
  });

  router.patch('/freedurov/sign', async (_, res) => {
    // Here, we will send a request again to an external backend API to sign the petition.
    await new Promise(r => setTimeout(r, 500));

    if (!isSigned) {
      signaturesCount++;
      isSigned = true;
    }
    res.json({
      data: {
        is_signed_by_user: isSigned,
        signatures_count: signaturesCount,
      },
      error: null,
    });
  });

  return router;
};
