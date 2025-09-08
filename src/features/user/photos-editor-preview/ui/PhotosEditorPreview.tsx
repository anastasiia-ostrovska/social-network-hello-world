import { useTheme } from '@mui/material/styles';
import { AvatarPosition, AvatarWithBgImage, UserPhotos } from '@entities/user';
import { usePhotosPreview } from '../model/usePhotosPrewiew';

interface PhotosEditorPreviewProps {
  name: string;
  photos: UserPhotos;
  imagesSize: number;
}

const PhotosEditorPreview = ({
  name,
  photos,
  imagesSize,
}: PhotosEditorPreviewProps) => {
  const { palette } = useTheme();
  const { avatar, background } = usePhotosPreview({ photos });

  return (
    <AvatarWithBgImage
      name={name}
      avatarSrc={avatar}
      bgImageSrc={background}
      avatarSize={imagesSize}
      bgImageHeight={imagesSize}
      avatarPosition={AvatarPosition.Left}
      avatarBorderColor={palette.customBackground.sectionWrapper}
      avatarBorderWidth="4px"
      sx={{ mb: `${imagesSize / 2}px` }}
    />
  );
};

export default PhotosEditorPreview;
