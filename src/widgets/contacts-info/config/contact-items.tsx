import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ContactLabel } from '@entities/user';
import { ContactLink } from '@features/user';
import { ContactItemsConfig } from '../model/types';

export const CONTACT_ITEMS: ContactItemsConfig = {
  [ContactLabel.LinkedIn]: {
    label: 'LinkedIn',
    type: ContactLink.Website,
    icon: <LinkedInIcon />,
  },
  [ContactLabel.Github]: {
    label: 'GitHub',
    type: ContactLink.Website,
    icon: <GitHubIcon />,
  },
  [ContactLabel.Facebook]: {
    label: 'Facebook',
    type: ContactLink.Website,
    icon: <FacebookIcon />,
  },
  [ContactLabel.Instagram]: {
    label: 'Instagram',
    type: ContactLink.Website,
    icon: <InstagramIcon />,
  },
  email: {
    label: 'Email',
    type: ContactLink.Email,
    icon: <EmailIcon />,
  },
  phone: {
    label: 'Phone',
    type: ContactLink.Phone,
    icon: <LocalPhoneIcon />,
  },
};
