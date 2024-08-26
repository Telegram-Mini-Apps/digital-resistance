import { Express } from 'express';
import { checkInitData } from '../../middleware/checkInitData';
import { parse } from '@telegram-apps/init-data-node';

export const attachPetitionsController = (app: Express) => {
  const freeDurovPetition = '0de4e94f-f131-49d1-8d61-17b107e36793';

  app.get(
    '/api/petitions/freedurov',
    checkInitData({
      expiresIn: 60 * 60 * 1000,
      tokenHashed: false,
    }),
    async (req, res) => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_PETITIONS_API_URL}/petitions/${freeDurovPetition}`,
          {
            headers: {
              'x-init-data': req.header('x-init-data') || '',
            },
          },
        )
          .then(async (response) => {
            const j = await response.json();
            if (!response.ok) {
              if (j.error) {
                throw new Error(`${j.error}: ${j.message}`);
              }
              throw new Error('Unknown error');
            }
            return j;
          });
        return res.json({ data: result, error: null });
      } catch (e) {
        console.error('Request failed:', e);
        return res.json({ data: 'error' });
      }
    });

  app.patch(
    '/api/petitions/freedurov/sign',
    checkInitData({
      expiresIn: 60 * 60 * 1000,
      tokenHashed: false,
    }),
    async (req, res) => {
      try {
        const initData = parse(req.header('x-init-data'));
        const result = await fetch(
          `${process.env.REACT_APP_PETITIONS_API_URL}/petitions/sign`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'x-init-data': req.header('x-init-data') || '',
            },
            body: JSON.stringify({
              petition_id: freeDurovPetition,
              user_id: initData.user?.id.toString(),
            }),
          },
        )
          .then(async (response) => {
            const j = await response.json();
            if (!response.ok) {
              if (j.error) {
                throw new Error(`${j.error}: ${j.message}`);
              }
              throw new Error('Unknown error');
            }
            return j;
          });
        return res.json({ data: result, error: null });
      } catch (e) {
        console.error('Request failed:', e);
        return res.json({ data: 'error' });
      }
    });
};
