import { Request, Response, NextFunction } from 'express';

const ALLOWED_HOSTNAMES: string[] = ['web.tappscenter.org'];

export const hostnameMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const clientHostname = req.hostname;

  if (clientHostname && ALLOWED_HOSTNAMES.includes(clientHostname)) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
