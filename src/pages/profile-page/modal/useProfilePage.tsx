import { useParamsId } from '@shared/lib';
import { Modal, useModalController } from '@entities/modal';
import { UseProfileModalsResult } from './types';

interface UseProfilePageResult extends UseProfileModalsResult {
  userId: string;
}

/**
 * A custom hook that provides functionalities for managing and interacting with the profile page.
 *
 * @returns {UseProfilePageResult} An object containing the current user's ID and functions to manage profile page modals.
 *
 * @property {string} userId - The ID of the current user.
 * @property {Function} handleShowPhotosEditorModal - Opens the modal for editing profile photos.
 * @property {Function} handleShowDetailsEditorModal - Opens the modal for editing profile details.
 * @property {Function} handleShowContactsModal - Opens the modal for displaying contact information.
 */

export const useProfilePage = (): UseProfilePageResult => {
  const { showModal } = useModalController();
  const userId = useParamsId();

  const handleShowPhotosEditorModal = (): void => {
    showModal(Modal.ProfilePhotosEditor);
  };

  const handleShowDetailsEditorModal = (): void => {
    showModal(Modal.ProfileInfoEditor);
  };

  const handleShowContactsModal = (): void => {
    showModal(Modal.Contacts);
  };

  return {
    userId,
    handleShowPhotosEditorModal,
    handleShowContactsModal,
    handleShowDetailsEditorModal,
  };
};
