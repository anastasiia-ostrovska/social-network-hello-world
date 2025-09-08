/**
 * Function to extract the first two initials from a full name.
 * If the name has only one word, it returns the initial of that word.
 *
 * @param {string} fullName - The full name of the user.
 * @returns {string} - A string with two initials (or one initial if the name consists of only one word).
 * Returns an empty string if the input is not a valid name.
 */

type Initials = string;

export const getInitials = (fullName: string): Initials => {
  if (!fullName || fullName.trim() === '') return '';

  return fullName
    .split(' ') // Split the name by spaces
    .filter(Boolean) // Remove empty elements from the array
    .map((name) => name[0]) // Take the first letter of each word
    .slice(0, 2) // Get up to two initials
    .join('') // Join them together
    .toUpperCase(); // Convert to uppercase
};

export default getInitials;
