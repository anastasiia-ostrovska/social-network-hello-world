import { useMediaQueryState } from '@shared/lib';

export const useImagesSize = (): { imageSize: number } => {
  const { isUpSM, isUpMD } = useMediaQueryState();

  if (isUpMD) return { imageSize: 120 };
  if (isUpSM) return { imageSize: 100 };

  return { imageSize: 80 };
};
