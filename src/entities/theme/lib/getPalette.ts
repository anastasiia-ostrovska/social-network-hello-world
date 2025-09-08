import { PaletteOptions } from '@mui/material/styles';
import { ThemeMode } from '../model/types';
import { AVATAR_COLORS, AvatarColors } from '../consts/avatar-colors';

type CustomBackground = {
  avatar: AvatarColors;
  userCard: string;
  sectionWrapper: string;
  sectionWrapperTransparent: string;
};

declare module '@mui/material/styles' {
  interface Palette {
    customBackground: CustomBackground;
  }

  interface PaletteOptions {
    customBackground?: Partial<CustomBackground>;
  }
}

const getPalette = (mode: ThemeMode): PaletteOptions => {
  return {
    mode,
    customBackground: {
      avatar: AVATAR_COLORS,
      userCard: mode === ThemeMode.Dark ? '#1d1d1d' : '#fff',
      sectionWrapper: mode === ThemeMode.Dark ? '#222222' : '#fff',
      sectionWrapperTransparent:
        mode === ThemeMode.Dark ? '#22222278' : '#ffffff80',
    },
  };
};

export default getPalette;
