import { useAppSelector } from '@shared/model';
import { Modal } from '@shared/ui';
import { selectModalState, useModalController } from '@entities/modal';
import { MODAL_ITEMS } from '@app/modal/config/modal-items';

/**
 * ModalController is a functional component responsible for rendering a modal dialog based on the application's state.
 * It derives the `isOpen` and `modalType` states from the application's Redux store using the `useAppSelector` hook.
 * The component resolves the modal properties from the `MODAL_ITEMS` mapping based on the current `modalType`.
 *
 * If a modal is open (`isOpen` is true) and a valid `modalType` is specified, it renders the Modal component
 * with the resolved properties and an `onClose` handler to hide the modal. If these conditions are not met, it returns null.
 */

const ModalController = () => {
  const { hideModal } = useModalController();
  const { isOpen, modalType } = useAppSelector(selectModalState);

  if (!isOpen || !modalType) return null;

  const modalProps = MODAL_ITEMS[modalType];

  return <Modal isOpen={isOpen} onClose={hideModal} {...modalProps} />;
};

export default ModalController;
