import { fieldIsRequired, validLinkFormat } from '@shared/forms';
import {
  CONTACTS_VALIDATION_MESSAGES,
  NAME_VALIDATION_MESSAGES,
} from './validation-messages';

export const nameValidationRules = {
  emailIsRequired: fieldIsRequired(NAME_VALIDATION_MESSAGES.required),
};

export const contactsValidationRules = {
  validFormal: validLinkFormat(CONTACTS_VALIDATION_MESSAGES.validFormat),
};
