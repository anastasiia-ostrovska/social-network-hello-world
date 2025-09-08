import { Error, ErrorMessages } from '@shared/error-message';

export const USER_INFO_ERROR_MESSAGES: ErrorMessages = {
  [Error.NotFound]: {
    title: 'User not found',
    message: "Sorry, we couldn't locate the user you're looking for.",
  },
};
