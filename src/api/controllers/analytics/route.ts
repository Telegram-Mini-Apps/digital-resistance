import request from 'request';
import { Request, Response } from 'express';
import { userSchema } from '../validatonSchema';

export async function post(req: Request, res: Response) {
    try {
        const body = await req.body;

        const validatedUser = await userSchema.validate(
            body,
            { strict: true },
        );

        request.post(
            `${process.env.REACT_APP_TAPPS_NOTIFIER_URL}/bot/sendMessage`,
            {
                json: {
                    telegram_user_data: {
                        ...validatedUser,
                    },
                },
            },
            (err, httpResponse, body) => {
                if (err) {
                    return console.error('Request failed:', err);
                }

                console.log('Notified successful!  Server responded with:', body);
            }
        )

        return res.json({ data: 'ok' });
    } catch (e) {
        console.log(e)
        return res.json({ data: 'error' });
    }
}
