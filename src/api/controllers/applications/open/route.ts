import request from 'request';
import { Request, Response } from 'express';
import { generateAuthToken } from '../../../../utils/api/generateAuthToken';
import { userSchema } from '../../validatonSchema';

export async function post(req: Request, res: Response) {
  try {
    const { application, telegram_user_data } = await req.body;
    const validatedUser = await userSchema.validate(
      telegram_user_data,
      { strict: true },
    );

    const res = await fetch(
      `${process.env.REACT_APP_TAPPS_NOTIFIER_URL}/applications/sendApplicationMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${generateAuthToken()}`,
        },
        body: JSON.stringify({
          telegram_user_data: validatedUser,
          application,
        }),
      },
    );

    console.log('Opened successfully!  Server responded with:', await res.text());
  } catch (e) {
    return res.json({ data: 'error' });
  }

  return res.json({ data: 'ok' });
}
