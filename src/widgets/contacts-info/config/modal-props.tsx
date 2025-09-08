import { ModalProps } from '@shared/ui';
import ContactsInfo from '../ui/ContactsInfo';

export const CONTACTS_MODAL_PROPS: ModalProps = {
  title: 'Contacts info',
  withTitleDivider: true,
  content: <ContactsInfo />,
};
