import * as REGEXP from '@shared/consts';
import createValidator from './validator-factory';

// --- REGEXP validators ---
const validateWithRegExp = (regExp: RegExp) => (value: string) => {
  if (!value) return true;
  return regExp.test(value);
};

export const validEmailFormat = createValidator(
  validateWithRegExp(REGEXP.VALID_EMAIL)
);
export const validLinkFormat = createValidator(
  validateWithRegExp(REGEXP.VALID_LINK)
);
export const containsUppercase = createValidator(
  validateWithRegExp(REGEXP.MATCH_UPPERCASE)
);
export const containsDigit = createValidator(
  validateWithRegExp(REGEXP.MATCH_DIGIT)
);
export const containsSpecialCharacter = createValidator(
  validateWithRegExp(REGEXP.MATCH_SPECIAL_CHARACTER)
);

// --- LENGTH validators ----
const validateMinLength = (minLength: number) => (value: string) => {
  return value.length >= minLength;
};

export const minLength12 = createValidator(validateMinLength(12));

// ---- REQUIRED validators ----
const validateValueExists = (value: string) => {
  return !!value;
};

export const fieldIsRequired = createValidator(validateValueExists);

// ---- WHITESPACE validators ----
const validateWhitespaces = (value: string) => {
  return value === value.replace(REGEXP.MATCH_ALL_WHITESPACES, '');
};

export const whitespacesForbidden = createValidator(validateWhitespaces);
