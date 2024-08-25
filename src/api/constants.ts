import { configDotenv } from 'dotenv';
import path from 'path';

configDotenv({ path: path.join(__dirname, '../../.env') });

export const CSRF_SECRET = process.env.CSRF_SECRET!;
export const TOKEN_EXPIRATION_MS = 60 * 60 * 1000;
