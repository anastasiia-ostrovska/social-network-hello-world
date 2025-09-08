import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { ROUTES } from '@shared/consts';
import { NavigationItem } from '../model/types';

export const TOP_NAV_ITEMS: NavigationItem[] = [
  {
    id: 'dialogs',
    path: ROUTES.DIALOGS,
    label: 'Dialogs',
    icon: <EmailIcon />,
  },
  {
    id: 'notifications',
    path: ROUTES.NOTIFICATIONS,
    label: 'Notifications',
    icon: <NotificationsIcon />,
  },
];
