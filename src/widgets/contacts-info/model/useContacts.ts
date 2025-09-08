import { useParamsId } from '@shared/lib';
import { useUserWithFallback } from '@entities/user';
import { ContactsArray } from './types';

interface UseContactsResult {
  contacts: ContactsArray;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

export const useContacts = (): UseContactsResult => {
  const userId = useParamsId();
  const { user, error, isError, isLoading } = useUserWithFallback({ userId });
  const { contacts, email, phone } = user;

  const contactsList = { ...contacts, email, phone };
  const contactsArray = Object.entries(contactsList) as ContactsArray;
  const filteredContacts = contactsArray.filter(([, contact]) => !!contact);

  return { contacts: filteredContacts, isLoading, isError, error };
};
