import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getIsFileList, useParamsId } from '@shared/lib';
import { useModalController } from '@entities/modal';
import {
  PhotoAction,
  PhotoLabel,
  UploadedPhotos,
  useUpdateUserMutation,
  useUserWithFallback,
} from '@entities/user';
import {
  useErrorPopupNotification,
  useSuccessPopupNotification,
} from '@entities/notification';
import { DEFAULT_IMAGE_INPUT_VALUES } from '../config/default-image-input-values';
import { UsePhotosEditorResult } from './types';

/**
 * Custom hook to manage and edit user photos (e.g., avatar, background) in the application.
 *
 * This hook provides the necessary state, handlers, and utilities for photo management
 * on a user profile, including form state handling, submission logic, and error handling.
 * It integrates with user data fetching, photo update mutations, and notification dispatching.
 *
 * @returns {UsePhotosEditorResult} An object containing user data, form methods, action statuses,
 * and a handler for applying changes to the photos.
 */

export const usePhotosEditor = (): UsePhotosEditorResult => {
  const userId = useParamsId();
  const {
    user,
    error: userError,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useUserWithFallback({ userId });
  const methods = useForm<UploadedPhotos>({
    defaultValues: DEFAULT_IMAGE_INPUT_VALUES,
  });
  const {
    reset,
    handleSubmit,
    formState: { dirtyFields, isSubmitSuccessful },
  } = methods;
  const [
    updatePhotos,
    {
      isLoading: isUpdating,
      error: updateError,
      isSuccess: isUpdateSuccessful,
    },
  ] = useUpdateUserMutation();
  useErrorPopupNotification({ error: userError || updateError });
  const { showSuccessNotification } = useSuccessPopupNotification({
    message: 'Images are successfully updated',
  });

  const { hideModal } = useModalController();

  useEffect(() => {
    if (isSubmitSuccessful && isUpdateSuccessful) {
      showSuccessNotification();
      hideModal();
      reset();
    }
  }, [
    hideModal,
    isSubmitSuccessful,
    isUpdateSuccessful,
    reset,
    showSuccessNotification,
  ]);

  const isFormEmpty =
    !dirtyFields[PhotoLabel.Avatar] && !dirtyFields[PhotoLabel.Background];
  const isActionDisabled = isUserError || isUserLoading || isUpdating;
  const isApplyDisabled = isActionDisabled || isFormEmpty;

  const handleApplyChanges: SubmitHandler<UploadedPhotos> = (data) => {
    const formData = new FormData();

    const processPhoto = (photoLabel: PhotoLabel) => {
      if (!dirtyFields[photoLabel]) return;

      const value = data[photoLabel];
      if (value === undefined) return;

      if (getIsFileList(value) && value.length > 0) {
        const file = value[0];
        formData.append(photoLabel, file);
      } else if (value === PhotoAction.Delete) {
        formData.append(photoLabel, value);
      }
    };

    processPhoto(PhotoLabel.Avatar);
    processPhoto(PhotoLabel.Background);

    updatePhotos(formData);
  };

  return {
    user,
    methods,
    isActionDisabled,
    isApplyDisabled,
    handleApplyChanges: handleSubmit(handleApplyChanges),
  };
};
