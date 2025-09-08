import { useTheme } from '@mui/material/styles';
import { getAvatarColor } from './getAvatarColor';
import { getInitials } from './getInitials';

interface AvatarData {
  bgColor: string;
  initials: string;
}

export const useAvatar = (name: string): AvatarData => {
  const { palette } = useTheme();

  const colors = Object.values(palette.customBackground.avatar);
  const bgColor = getAvatarColor(name, colors);
  const initials = getInitials(name);

  return { bgColor, initials };
};
