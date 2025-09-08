import { AvatarColor } from '@entities/theme';

/**
 * Hash function to compute a hash value for a string.
 * @param {string} name - The user's name.
 * @returns {number} - The hash value.
 * Returns 0 if the input is invalid
 */

const getNameHash = (name: string): number => {
  if (!name) return 0;

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    hash = (hash * 31 + charCode) % 4294967296; // 2^32
  }

  return hash;
};

/**
 * * Generates a color for an avatar based on the user's name.
 * The color is selected by hashing the name and using the result to pick from a list of colors.
 *
 * @param {string} name - The user's name.
 * @param {string[]} colors - An array of colors.
 * @returns {string} - The color assigned to the avatar.
 */

export const getAvatarColor = (
  name: string,
  colors: AvatarColor[]
): AvatarColor => {
  const hash = getNameHash(name);
  const colorIndex = hash % colors.length;

  return colors[colorIndex];
};
