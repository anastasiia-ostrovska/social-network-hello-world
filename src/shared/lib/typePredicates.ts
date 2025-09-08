/**
 * Determines whether the given value is an instance of FileList.
 *
 * This function checks if the provided value is of type FileList,
 * which represents a list of File objects usually returned by input
 * elements with a type of "file" in web applications.
 *
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} True if the value is an instance of FileList, otherwise false.
 */

export const getIsFileList = (value: unknown): boolean => {
  return value instanceof FileList;
};
