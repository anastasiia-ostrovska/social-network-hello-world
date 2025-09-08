import {
  containsDigit,
  containsSpecialCharacter,
  containsUppercase,
  fieldIsRequired,
  minLength12,
  validEmailFormat,
  whitespacesForbidden,
} from '@shared/forms';
import {
  EMAIL_VALIDATION_MESSAGES,
  PASSWORD_VALIDATION_MASSAGES,
} from './validation-messages';

export const emailValidationRules = {
  emailIsRequired: fieldIsRequired(EMAIL_VALIDATION_MESSAGES.required),
  whitespacesForbidden: whitespacesForbidden(
    EMAIL_VALIDATION_MESSAGES.whitespacesForbidden
  ),
  validEmailFormat: validEmailFormat(
    EMAIL_VALIDATION_MESSAGES.invalidEmailFormat
  ),
};

export const passwordValidationRules = {
  passwordIsRequired: fieldIsRequired(PASSWORD_VALIDATION_MASSAGES.required),
  whitespacesForbidden: whitespacesForbidden(
    PASSWORD_VALIDATION_MASSAGES.whitespacesForbidden
  ),
  uppercaseRequired: containsUppercase(
    PASSWORD_VALIDATION_MASSAGES.uppercaseRequired
  ),
  digitRequired: containsDigit(PASSWORD_VALIDATION_MASSAGES.digitRequired),
  specialCharacterRequired: containsSpecialCharacter(
    PASSWORD_VALIDATION_MASSAGES.specialCharacterRequired
  ),
  minLength12: minLength12(PASSWORD_VALIDATION_MASSAGES.minLength12),
};
