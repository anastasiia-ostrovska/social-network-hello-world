import { ModalProps } from '@shared/ui';
import EditorSubmitButton from '../ui/EditorSubmitButton';
import ProfilePhotosEditor from '../ui/ProfileInfoEditor';

export const PROFILE_INFO_EDITOR_MODAL_PROPS: ModalProps = {
  title: 'Profile info editor',
  withTitleDivider: true,
  withActionsDivider: true,
  content: <ProfilePhotosEditor />,
  actions: <EditorSubmitButton />,
};
