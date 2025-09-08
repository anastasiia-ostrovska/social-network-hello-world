import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ControlledTextFieldWithTypeAttribute } from '@shared/forms';
import { ContactLabel } from '@entities/user';

export enum UserInfoItemLabel {
  Name = 'name',
  Country = 'country',
  Job = 'job',
}

export enum PhoneLabel {
  Phone = 'phone',
}

export type ConfigField<T extends string> = Record<
  T,
  ControlledTextFieldWithTypeAttribute
>;

export type ContactItemKey = ContactLabel | PhoneLabel;
export type UserInfoItems = ConfigField<UserInfoItemLabel>;
export type ContactItems = ConfigField<ContactItemKey>;

export type ContactsArray = [
  ContactItemKey,
  ControlledTextFieldWithTypeAttribute,
][];
export type UserInfoArray = [
  UserInfoItemLabel,
  ControlledTextFieldWithTypeAttribute,
][];
export type ProfileInfoEditorItemKey = UserInfoItemLabel | ContactItemKey;
export type ProfileInfoEditorInputs = Record<ProfileInfoEditorItemKey, string>;

export interface UsePhotosEditorResult {
  methods: UseFormReturn<ProfileInfoEditorInputs>;
  contactItems: ContactsArray;
  userInfoItems: UserInfoArray;
  defaultValues: ProfileInfoEditorInputs;
  isDisabledForm: boolean;
  handleApplyChanges: (e?: BaseSyntheticEvent) => Promise<void>;
}
