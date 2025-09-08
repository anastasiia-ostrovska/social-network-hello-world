/**
 * Transforms the first letter of a given string to uppercase and returns the modified string.
 * If the input string is empty or undefined, it returns an empty string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The string with its first letter capitalized.
 */

export const withCapitalLetter = (str: string): string => {
  if (!str) return '';

  return str[0].toUpperCase() + str.slice(1);
};
