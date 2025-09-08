import { useAppDispatch } from '@shared/model';
import { closeModal, openModal } from './modalSlice';
import { Modal } from './types';

type ShowModalHandler = (modalType: Modal) => void;

interface ModalControllerResult {
  showModal: ShowModalHandler;
  hideModal: () => void;
}

/**
 * A custom hook that provides methods to control the display of modals.
 *
 * This hook simplifies modal management by allowing for the modal to be
 * shown or hidden. It integrates with the application's state management
 * to dispatch modal-related actions.
 *
 * @returns An object containing the following methods:
 * - showModal: Function to display a modal with the specified properties.
 * - hideModal: Function to hide the currently active modal.
 */

export const useModalController = (): ModalControllerResult => {
  const dispatch = useAppDispatch();

  const showModal: ShowModalHandler = (modalType) => {
    dispatch(openModal(modalType));
  };

  const hideModal = () => dispatch(closeModal());

  return { showModal, hideModal };
};
