import { Express } from 'express';
import { checkInitData } from '../../middleware/checkInitData';

export const attachPetitionsController = (app: Express) => {
  app.get(
    '/api/petitions/:id',
    checkInitData({
      expiresIn: 60 * 60 * 1000,
      tokenHashed: false,
    }),
    async (req, res) => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_PETITIONS_API_URL}/petitions/${req.params.id}`,
          {
            headers: {
              'x-init-data': req.header('x-init-data') || '',
            },
          },
        ).then((response) => response.json());
        return res.json({ data: result, error: null });
      } catch (e) {
        console.error('Request failed:', e);
        return res.json({ data: 'error' });
      }
    });
};