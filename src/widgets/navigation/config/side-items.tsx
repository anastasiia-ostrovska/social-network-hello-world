import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ROUTES } from '@shared/consts';
import { NavigationItem } from '../model/types';

export const SIDE_NAV_ITEMS: NavigationItem[] = [
  { id: 'home', path: ROUTES.HOME, label: 'Home', icon: <HomeIcon /> },
  {
    id: 'network',
    path: ROUTES.NETWORK,
    label: 'My Network',
    icon: <GroupIcon />,
  },
  {
    id: 'new-post',
    path: ROUTES.NEW_POST,
    label: 'New Post',
    icon: <AddBoxIcon />,
  },
  {
    id: 'favourites',
    path: ROUTES.FAVOURITES,
    label: 'Favourites',
    icon: <FavoriteIcon />,
  },
];
