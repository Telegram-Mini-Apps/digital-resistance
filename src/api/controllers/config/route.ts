import { Request, Response } from 'express';
import { AppConfig } from '../../../../types/entities'
import { getEntity } from '../../../utils/api/entities';
import { DEFAULT_APP_CONFIG } from '../../../utils/constatns';

export async function get(req: Request, res: Response) {
    try {
        const config = await getEntity<AppConfig>(
            'app-config',
        )

        if (config) {
            return res.json({ data: config.data });
        }
    } catch (e) {
        return res.json({ data: DEFAULT_APP_CONFIG });
    }

    return res.json({ data: DEFAULT_APP_CONFIG });
}
