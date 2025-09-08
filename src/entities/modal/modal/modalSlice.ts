import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Modal } from './types';

interface ModalState {
  isOpen: boolean;
  isActionDisabled: boolean;
  modalType: Modal | null;
}

const initialState: ModalState = {
  isOpen: false,
  isActionDisabled: true,
  modalType: null,
};

/**
 * A slice of the Redux state responsible for managing modal-related state.
 * It contains the state, selectors, and reducers required to manipulate and retrieve modal information.
 *
 * **State Properties:**
 * - `isOpen`: A boolean value indicating whether the modal is open or closed.
 * - `isActionDisabled`: A boolean value indicating whether actions within the modal are disabled.
 * - `modalType`: Represents the type of the modal currently being displayed.
 *
 * **Selectors:**
 * - `selectModalState`: Retrieves the entire modal state.
 * - `selectIsModalOpen`: Retrieves the value of the `isOpen` property to determine if the modal is open.
 * - `selectIsActionDisabled`: Retrieves the value of the `isActionDisabled` property to check if actions are disabled.
 * - `selectModalType`: Retrieves the type of the modal (`modalType`).
 *
 * **Reducers:**
 * - `setIsActionDisabled`: Updates the `isActionDisabled` property based on a boolean payload.
 * - `openModal`: Sets the `isOpen` property to true and assigns the provided modal type to `modalType`.
 * - `closeModal`: Sets the `isOpen` property to false and assigns the provided modal type to `null`.
 */

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  selectors: {
    selectModalState: (state) => state,
    selectIsModalOpen: (state) => state.isOpen,
    selectIsActionDisabled: (state) => state.isActionDisabled,
    selectModalType: (state) => state.modalType,
  },
  reducers: {
    setIsActionDisabled(state, action: PayloadAction<boolean>) {
      state.isActionDisabled = action.payload;
    },
    openModal(state, action: PayloadAction<Modal>) {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { selectIsModalOpen, selectIsActionDisabled, selectModalState } =
  modalSlice.selectors;
export const { openModal, closeModal, setIsActionDisabled } =
  modalSlice.actions;
export default modalSlice;
