import { useMemo } from 'react';
import { useUserByIdQuery } from '../api/userApi';
import { generateFakeUsers } from '../lib/generateFakeUsers';
import { UserWithInfo } from './types';

interface UserWithFallback {
  user: UserWithInfo;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
}

/**
 * A function that retrieves a user by their ID or provides a fallback user if the actual user cannot be fetched.
 *
 * @param {Object} params - The parameters required to fetch the user.
 * @param {string} params.userId - The unique identifier for the user to be fetched.
 * @returns {UserWithFallback} An object containing user data along with additional status flags for the fetch operation.
 */

export const useUserWithFallback = ({
  userId,
}: {
  userId: string;
}): UserWithFallback => {
  const { data, error, isError, isLoading } = useUserByIdQuery(userId);
  const fakeUser = useMemo(() => generateFakeUsers(1)[0], []);
  const user = data?.data ?? fakeUser;

  return { user, error, isError, isLoading };
};
