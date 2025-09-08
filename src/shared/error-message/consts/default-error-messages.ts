import { Error, ErrorMessages } from '../model/types';

export const DEFAULT_ERROR_MESSAGES: ErrorMessages = {
  [Error.InvalidRequest]: {
    title: 'Invalid Request',
    message: 'Please check your input and try again.',
  },
  [Error.Unauthorized]: {
    title: 'Unauthorized',
    message: 'Please log in to continue.',
  },
  [Error.Forbidden]: {
    title: 'Access Denied',
    message: "You don't have permission to perform this action.",
  },
  [Error.NotFound]: {
    title: 'Not Found',
    message: 'Requested resource not found. Please check the URL.',
  },
  [Error.ServerError]: {
    title: 'Server Error',
    message:
      'We are experiencing technical difficulties. Please try again later.',
  },
  [Error.UnexpectedError]: {
    message: 'An unexpected error occurred. Please try again later.',
  },
};
