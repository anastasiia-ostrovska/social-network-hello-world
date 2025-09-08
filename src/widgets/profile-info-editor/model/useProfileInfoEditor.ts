import { useForm } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { useUpdateUserMutation, useUserWithFallback } from '@entities/user';
import {
  useErrorPopupNotification,
  useSuccessPopupNotification,
} from '@entities/notification';
import { setIsActionDisabled, useModalController } from '@entities/modal';
import { useAppDispatch } from '@shared/model';
import { useParamsId } from '@shared/lib';
import { getDefaultInputsValues } from '../lib/getDefaultInputsValues';
import { CONTACT_ITEMS, USER_INFO_ITEMS } from '../config/profile-info-items';
import {
  ContactsArray,
  ProfileInfoEditorInputs,
  UsePhotosEditorResult,
  UserInfoArray,
} from './types';

/**
 * A custom hook that manages the state and logic for editing user profile information.
 *
 * @returns {Object} An object containing various properties and methods for managing the profile editor:
 * - methods: The form methods provided by react-hook-form.
 * - contactItems: Configuration for contact-related items in the profile editor.
 * - userInfoItems: Configuration for user-specific information items in the profile editor.
 * - defaultValues: The default values for the form, based on the user's current data.
 * - isDisabledForm: A boolean indicating if the form should be disabled based on the current loading/error states.
 * - handleApplyChanges: A function to handle applying changes to the profile information when the form is submitted.
 */

export const useProfileInfoEditor = (): UsePhotosEditorResult => {
  // Retrieve user id
  const userId = useParamsId();

  // Fetch user data
  const {
    user,
    error: userError,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useUserWithFallback({ userId });

  // Form setup
  const defaultFormValues = useMemo(() => getDefaultInputsValues(user), [user]);
  const methods = useForm<ProfileInfoEditorInputs>({
    defaultValues: defaultFormValues,
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, isDirty, isValid },
  } = methods;

  useEffect(() => {
    if (!isUserLoading && user) {
      const values = getDefaultInputsValues(user);
      reset(values);
    }
  }, [user, reset, isUserLoading]);

  // Update mutation
  const [
    updateInfo,
    {
      isLoading: isUpdating,
      error: updateError,
      isSuccess: isUpdateSuccessful,
    },
  ] = useUpdateUserMutation();

  // Notification/modal handling
  useErrorPopupNotification({ error: userError || updateError });
  const { showSuccessNotification } = useSuccessPopupNotification({
    message: 'Profile details are successfully updated',
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

  // Derived state
  const isDisabledForm = useMemo(
    () => isUserError || isUserLoading || isUpdating,
    [isUpdating, isUserError, isUserLoading]
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    const isSubmitButtonDisabled = isDisabledForm || !isDirty || !isValid;
    dispatch(setIsActionDisabled(isSubmitButtonDisabled));
  }, [dispatch, isDirty, isDisabledForm, isValid]);

  // Submit handler
  const onSubmit = (data: ProfileInfoEditorInputs): void => {
    updateInfo(data);
  };

  // Items config
  const contactItems = Object.entries(CONTACT_ITEMS) as ContactsArray;
  const userInfoItems = Object.entries(USER_INFO_ITEMS) as UserInfoArray;

  return {
    methods,
    contactItems,
    userInfoItems,
    defaultValues: defaultFormValues,
    isDisabledForm,
    handleApplyChanges: handleSubmit(onSubmit),
  };
};
