import { configDotenv } from 'dotenv'
import { Request, Response, NextFunction } from 'express';
import { validate, parse } from '@telegram-apps/init-data-node';
configDotenv();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

interface InitDataOptions {
    expiresIn?: number;
    tokenHashed?: boolean;
}

export function checkInitData(options: InitDataOptions = {}) {
    return function (req: Request, res: Response, next: NextFunction) {
        const initData = req.headers['x-init-data'] as string;

        if (!initData) {
            res.status(403);
            res.send('Unauthorized');

            return;
        }

        const parsedData = parse(initData);
        const isUserIdValid = req.body.telegram_user_data.id === parsedData!.user!.id;

        if (!isUserIdValid) {
            res.status(403);
            res.send('Unauthorized');

            return;
        }

        try {
            validate(initData, TELEGRAM_BOT_TOKEN, options);

            next();
        } catch (err) {
            res.status(403);
            res.send('Unauthorized');

            return;
        }
    };
}
