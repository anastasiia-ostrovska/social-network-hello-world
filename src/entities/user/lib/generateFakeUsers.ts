import { UserWithInfo } from '../model/types';

/**
 * Generates an array of fake users.
 *
 * @param {number} count - The number of users to create.
 * @returns {Array} - An array of user objects.
 *
 * Each user has the following fields:
 *   - id: unique user identifier (uuid)
 *   - name: empty string for the name
 *   - status: empty string for the status
 *   - photos: an object with small and large photo properties set to null
 *   - followed: default value is false
 */

export const generateFakeUsers = (count: number): UserWithInfo[] =>
  Array.from({ length: count }, () => ({
    id: crypto.randomUUID(),
    name: '',
    photos: { avatar: null, background: null },
    email: '',
    phone: '',
    country: '',
    job: '',
    aboutMe: '',
    contacts: {
      linkedIn: '',
      github: '',
      facebook: '',
      instagram: '',
    },
    isFollowedByMe: false,
    followedBy: [],
    following: [],
  }));
