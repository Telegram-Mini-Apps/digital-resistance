import crypto from 'crypto';

const TOKEN_LENGTH = 32;

export function createCSRFToken(secret: string): string {
  const token = crypto.randomBytes(TOKEN_LENGTH).toString('hex');
  const hmac = crypto.createHmac('sha256', secret).update(token).digest('hex');
  return `${token}.${hmac}`;
}

export function validateCSRFToken(secret: string, token: string): boolean {
  try {
    const [tokenPart, hmacPart] = token.split('.');

    if (!tokenPart || !hmacPart) {
      return false;
    }

    const validHmac = crypto.createHmac('sha256', secret).update(tokenPart).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(hmacPart), Buffer.from(validHmac));
  } catch (e) {

    return false;
  }
}
