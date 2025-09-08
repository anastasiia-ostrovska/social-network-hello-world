import PersonIcon from '@mui/icons-material/Person';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import { ROUTES } from '@shared/consts';
import { NavigationItem } from '../model/types';

export const PROFILE_NAV_ITEMS: NavigationItem[] = [
  {
    id: 'profile',
    path: ROUTES.PROFILE,
    label: 'Profile',
    icon: <PersonIcon />,
  },
  {
    id: 'library',
    path: ROUTES.LIBRARY,
    label: 'Library',
    icon: <TurnedInIcon />,
  },
  {
    id: 'settings',
    path: ROUTES.SETTINGS,
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];
