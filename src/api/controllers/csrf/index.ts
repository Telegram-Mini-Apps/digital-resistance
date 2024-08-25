import { Express } from 'express';
import { TOKEN_EXPIRATION_MS } from '../../constants'
import { checkInitData } from '../../middleware/checkInitData'
import { createCSRFToken } from '../../utils'

export const attachCSRFController = (app: Express) => {
    app.post(
        '/api/revalidate-csrf',
        checkInitData({
            expiresIn: 60*60*1000,
            tokenHashed: false,
        }),
        (req, res) => {
        const currentTime = Date.now();
        const csrfToken = createCSRFToken(process.env.CSRF_SECRET!);

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

        console.log(csrfToken);

        return res.status(200).json({});
    })
}
