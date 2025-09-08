import { Error, ErrorMessages } from '@shared/error-message';

export const LOGIN_ERROR_MESSAGES: ErrorMessages = {
  [Error.InvalidCredentials]: {
    title: 'Invalid email or password',
    message: 'Please check your email and password, then try again.',
  },
};
