import { Request, Response } from 'express';
import { generateAuthToken } from '../../../../utils/api/generateAuthToken';
import { userSchema } from '../../validatonSchema';

export async function post(req: Request, res: Response) {
    try {
        const { telegram_user_data, query } = await req.body;
        const validatedUser = await userSchema.validate(
            telegram_user_data,
            { strict: true },
        );

        const result = await fetch(
            `${process.env.REACT_APP_TAPPS_NOTIFIER_URL}/applications/getRecentlyLaunched`,
            {
                method: 'POST',
                body: JSON.stringify({
                    telegram_user_id: validatedUser.id,
                    query,
                }),
                headers: {
                    'Connection' : 'keep-alive',
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${generateAuthToken()}`,
                },
            },
        ).then((response) => response.json());

        return res.json({ data: result, error: null });
    } catch (e) {
        console.error('Request failed:', e);
        return res.json({ data: 'error' });
    }
}
