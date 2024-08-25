import { Request, Response } from 'express';
import redisClient from '../../../redisClient';

export async function post(req: Request, res: Response) {
    try {
        const { user_id } = await req.body;

        redisClient.lPush('blum:projects', [String(user_id)]);
    } catch (e) {
        return res.json({ data: 'error' });
    }

    return res.json({ data: 'ok' });
}
