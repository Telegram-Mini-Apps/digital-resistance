import { Request, Response } from 'express';
import { TWAApplication } from '../../../../types/entities';
import { getEntities, getEntitiesFromProxy } from '../../../utils/api/entities';

export async function post(req: Request, res: Response) {
  const { value, filters } = await req.body;

  const filtersQuery = {
    $and: [
      {
        $or: [
          {
            title: {
              $containsi: value,
            },
          },
          {
            description: {
              $containsi: value,
            },
          },
        ],
      },
      {
        ...filters,
      },
    ],
  };

  if (value === '') {
    const applications = await getEntities<Array<TWAApplication>>(
      'applications',
      {
        sort: ['editors_choice', 'createdAt:desc'],
        filters: filtersQuery,
      },
    ).catch((e) => {
      console.log(e);
    });

    if (applications) {
      return res.json({ data: applications?.data || null });
    }
  }

  const applications = await getEntitiesFromProxy<Array<TWAApplication>>(
    'applications',
    {
      filters: filtersQuery,
      populate: ['icon', 'poster', 'categories'],
    },
  ).catch((e) => {
    console.log(e);
  });

  if (applications) {
    return res.json({ data: applications.data });
  }

  return res.json({ data: [] });
}
