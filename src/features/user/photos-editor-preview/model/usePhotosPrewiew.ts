import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  PhotoLabel,
  PhotoSrc,
  UploadedPhotos,
  UserPhotos,
} from '@entities/user';
import { updateImgSrc } from '../lib/updateImgSrc';

export const usePhotosPreview = ({
  photos,
}: {
  photos: UserPhotos;
}): UserPhotos => {
  const [avatarSrc, setAvatarSrc] = useState<PhotoSrc>(photos.avatar);
  const [backgroundSrc, setBackgroundSrc] = useState<PhotoSrc>(
    photos.background
  );

  const { watch } = useFormContext<UploadedPhotos>();

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      const updateProfileImgSrc = updateImgSrc(value);
      updateProfileImgSrc({
        photoLabel: PhotoLabel.Avatar,
        initialValue: photos.avatar,
        setSrc: setAvatarSrc,
      });
      updateProfileImgSrc({
        photoLabel: PhotoLabel.Background,
        initialValue: photos.background,
        setSrc: setBackgroundSrc,
      });
    });
    return () => unsubscribe();
  }, [photos.avatar, photos.background, watch]);

  return { avatar: avatarSrc, background: backgroundSrc };
};
