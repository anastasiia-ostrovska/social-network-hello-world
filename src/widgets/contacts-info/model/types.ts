import { ContactLink } from '@features/user';
import { ReactNode } from 'react';
import { ContactLabel, ContactUrl } from '@entities/user';

export interface ContactItem {
  label: string;
  type: ContactLink;
  icon?: ReactNode;
}

export type ContactItemsConfigKey = ContactLabel | 'email' | 'phone';
export type ContactItemsConfig = Record<ContactItemsConfigKey, ContactItem>;
export type ContactsArray = [ContactItemsConfigKey, ContactUrl][];
