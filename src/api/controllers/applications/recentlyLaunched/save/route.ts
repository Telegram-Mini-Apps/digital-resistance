import request from 'request';
import { Request, Response } from 'express';
import { generateAuthToken } from '../../../../../utils/api/generateAuthToken';

import { userSchema } from '../../../validatonSchema';

export async function post(req: Request, res: Response) {
  try {
    const { application, telegram_user_data } = await req.body;
    const validatedUser = await userSchema.validate(
      telegram_user_data,
      { strict: true },
    );

    request.post(
      `${process.env.REACT_APP_TAPPS_NOTIFIER_URL}/applications/storeRecentlyLaunched`,
      {
        json: {
          telegram_user_id: validatedUser.id,
          application_id: application.id,
        },
        headers: {
          'Connection': 'keep-alive',
          'Content-Type': 'application/json',
          'Authorization': `Basic ${generateAuthToken()}`,
        },
      },
      (err, httpResponse, body) => {
        if (err) {
          return console.error('Request failed:', err);
        }

        console.log('Data stored successfully!  Server responded with:', body);
      },
    );
  } catch (e) {
    console.log(e);
    return res.json({ data: 'error' });
  }

  return res.json({ data: 'ok' });
}
