import { configDotenv } from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { CSRF_SECRET, TOKEN_EXPIRATION_MS } from '../constants'
import { createCSRFToken, validateCSRFToken } from '../utils'
configDotenv({ path: path.join(__dirname, '../../../.env') });

export function csrfTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    let csrfToken = req.cookies['XSRF-TOKEN'];

    const tokenCreatedAt = parseInt(req.cookies['XSRF-TOKEN-CREATED-AT'], 10) || 0;
    const currentTime = Date.now();
    const isTokenValid = validateCSRFToken(CSRF_SECRET, csrfToken)

    if (!csrfToken || !isTokenValid || (currentTime - tokenCreatedAt >= TOKEN_EXPIRATION_MS)) {
        csrfToken = createCSRFToken(CSRF_SECRET);
        res.cookie('XSRF-TOKEN', csrfToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: TOKEN_EXPIRATION_MS,
        });

        res.cookie('XSRF-TOKEN-CREATED-AT', currentTime.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: TOKEN_EXPIRATION_MS,
        });

        return res.status(429).json({ error: 'Invalid CSRF token' });
    } else {
        next();
    }
}

export function verifyCsrfToken(req: Request, res: Response, next: NextFunction) {
    const csrfToken = req.cookies['XSRF-TOKEN'];

    if (!csrfToken || !validateCSRFToken(CSRF_SECRET, csrfToken)) {
        return res.status(429).json({ error: 'Invalid CSRF token' });
    }

    next();
}
