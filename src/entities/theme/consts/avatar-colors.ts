import {
  green,
  orange,
  pink,
  purple,
  teal,
  yellow,
} from '@mui/material/colors';

export const AVATAR_COLORS = {
  purple: purple[400],
  teal: teal[400],
  orange: orange[800],
  yellow: yellow[900],
  pink: pink[400],
  green: green[600],
} as const;

export type AvatarColors = typeof AVATAR_COLORS;
export type AvatarColor = AvatarColors[keyof AvatarColors];
