import { Dispatch, SetStateAction } from 'react';
import {
  PhotoAction,
  PhotoLabel,
  PhotoSrc,
  UploadedPhotos,
} from '@entities/user';

interface UpdateImageSrcParams {
  photoLabel: PhotoLabel;
  initialValue: PhotoSrc;
  setSrc: Dispatch<SetStateAction<PhotoSrc>>;
}

/**
 * A function factory that returns a function to update the image source based on the provided value.
 *
 * @param {Partial<UploadedPhotos>} value - An object which may contain photo data or actions relating to photo updates.
 * @returns a function that updates the image source.
 *
 * The returned function behavior:
 * - Sets the image source to `null` if the associated value is `PhotoAction.Delete`.
 * - Reverts the image source to the initial value if the associated value is `undefined`.
 * - Updates the image source to a new URL object created from the first file in the FileList, revoking the previous object URL if applicable.
 */

export const updateImgSrc =
  (value: Partial<UploadedPhotos>) =>
  ({ photoLabel, initialValue, setSrc }: UpdateImageSrcParams): void => {
    const inputValue = value?.[photoLabel];

    if (inputValue === PhotoAction.Delete) {
      setSrc(null);
      return;
    }

    if (inputValue === undefined) {
      setSrc(initialValue);
      return;
    }

    if (inputValue instanceof FileList && inputValue.length > 0) {
      const file = inputValue[0];
      // Revoke previous URL if exists
      setSrc((prevSrc) => {
        if (typeof prevSrc === 'string') {
          URL.revokeObjectURL(prevSrc);
        }
        return URL.createObjectURL(file);
      });
    }
  };
