import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import { getContactUrlWithPrefix } from '../lib/getContactUrlWithPrefix';
import { ContactLink, ContactLinkProps } from '../model/types';

const UserContactLink = ({
  url,
  label,
  icon = <LinkIcon />,
  type = ContactLink.Website,
}: ContactLinkProps) => {
  const contactUrl = getContactUrlWithPrefix({ url, type });

  return (
    <Stack direction="row" spacing={1}>
      <Box sx={{ color: 'text.secondary' }}>{icon}</Box>
      <Stack>
        <Typography variant="body2">{label}</Typography>
        <Link
          href={contactUrl}
          underline="always"
          target="_blank"
          variant="caption"
        >
          {url}
        </Link>
      </Stack>
    </Stack>
  );
};

export default UserContactLink;
