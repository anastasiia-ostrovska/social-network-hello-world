import { ModalProps } from '@shared/ui';
import { Modal } from '@entities/modal';
import { PROFILE_INFO_EDITOR_MODAL_PROPS } from '@widgets/profile-info-editor';
import { PROFILE_PHOTOS_EDITOR_MODAL_PROPS } from '@widgets/profile-photos-editor';
import { CONTACTS_MODAL_PROPS } from '@widgets/contacts-info';

type ModalItems = Record<Modal, ModalProps>;

export const MODAL_ITEMS: ModalItems = {
  [Modal.ProfileInfoEditor]: PROFILE_INFO_EDITOR_MODAL_PROPS,
  [Modal.ProfilePhotosEditor]: PROFILE_PHOTOS_EDITOR_MODAL_PROPS,
  [Modal.Contacts]: CONTACTS_MODAL_PROPS,
};
