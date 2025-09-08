import { useParams } from 'react-router-dom';

/**
 * Retrieves the `userId` parameter from the current route using React Router's `useParams` hook.
 * If the `userId` is undefined or not present, returns an empty string.
 *
 * @returns {string} The `userId` parameter from the route, or an empty string if not available.
 */

export const useParamsId = (): string => {
  const { userId } = useParams();
  return userId || '';
};
