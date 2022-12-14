import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
    body: object({
        email: string({
            // eslint-disable-next-line camelcase
            required_error: 'Email is required',
        }).email('Email not valid'),
        password: string({
            // eslint-disable-next-line camelcase
            required_error: 'Password is required',
        }).min(6, 'Invalid email or password'),
    }),
});

export type LoginInput = TypeOf<typeof loginSchema>['body'];