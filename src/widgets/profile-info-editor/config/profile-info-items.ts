import { withCapitalLetter } from '@shared/lib';
import { ContactLabel } from '@entities/user';
import {
  ContactItems,
  PhoneLabel,
  UserInfoItemLabel,
  UserInfoItems,
} from '../model/types';
import {
  contactsValidationRules,
  nameValidationRules,
} from './validation-rules';

const createItemNameAndLabel = (name: string) => ({
  name,
  label: withCapitalLetter(name),
});

const contactsProps = {
  multiline: true,
  maxRows: 2,
  rules: {
    validate: contactsValidationRules,
  },
};

export const USER_INFO_ITEMS: UserInfoItems = {
  [UserInfoItemLabel.Name]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Name),
    required: true,
    rules: {
      validate: nameValidationRules,
    },
  },
  [UserInfoItemLabel.Country]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Country),
  },
  [UserInfoItemLabel.Job]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Job),
  },
};

export const CONTACT_ITEMS: ContactItems = {
  [ContactLabel.LinkedIn]: {
    ...createItemNameAndLabel(ContactLabel.LinkedIn),
    ...contactsProps,
  },
  [ContactLabel.Github]: {
    ...createItemNameAndLabel(ContactLabel.Github),
    ...contactsProps,
  },
  [ContactLabel.Facebook]: {
    ...createItemNameAndLabel(ContactLabel.Facebook),
    ...contactsProps,
  },
  [ContactLabel.Instagram]: {
    ...createItemNameAndLabel(ContactLabel.Instagram),
    ...contactsProps,
  },
  phone: {
    ...createItemNameAndLabel(PhoneLabel.Phone),
  },
};
