import { boolean, number, object, string } from 'yup';

export const userSchema = object({
    allows_write_to_pm: boolean(),
    first_name: string(),
    id: number().required(),
    is_premium: boolean(),
    language_code: string(),
    last_name: string(),
    username: string(),
});
