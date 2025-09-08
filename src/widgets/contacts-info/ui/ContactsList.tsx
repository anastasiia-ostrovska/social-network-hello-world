import { CONTACT_ITEMS } from '@widgets/contacts-info/config/contact-items';
import { SkeletonWrapper } from '@shared/ui';
import { UserContactLink } from '@features/user';
import { ContactsArray } from '../model/types';

interface ContactsListProps {
  contacts: ContactsArray;
  isLoading: boolean;
}

const ContactsList = ({ contacts, isLoading }: ContactsListProps) => {
  return contacts.map(([configKey, contact]) => {
    const item = CONTACT_ITEMS[configKey];

    return (
      <SkeletonWrapper
        key={configKey}
        isLoading={isLoading}
        element={<UserContactLink url={contact} {...item} />}
      />
    );
  });
};

export default ContactsList;
