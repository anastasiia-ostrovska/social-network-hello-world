import { ButtonProps } from '@mui/material';
import { useMediaQueryState } from '@shared/lib';

export const useButtonSize = (): ButtonProps['size'] => {
  const { isUpSM, isUpMD } = useMediaQueryState();

  if (isUpMD) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};
