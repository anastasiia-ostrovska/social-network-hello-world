import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ErrorEmbeddedNotification } from '@features/notification';
import { useContacts } from '../model/useContacts';
import ContactsList from './ContactsList';

const ContactsInfo = () => {
  const { contacts, isLoading, isError, error } = useContacts();

  if (error) {
    return <ErrorEmbeddedNotification error={error} />;
  }

  return contacts.length ? (
    <Stack spacing={2} sx={{ minWidth: 300 }}>
      <ContactsList contacts={contacts} isLoading={isLoading || isError} />
    </Stack>
  ) : (
    <Typography>
      Looks like this user hasn’t added any contact details.
    </Typography>
  );
};

export default ContactsInfo;
