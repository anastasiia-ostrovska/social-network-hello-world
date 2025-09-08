import { SubmitButton } from '@shared/forms';
import { selectIsActionDisabled } from '@entities/modal';
import { useAppSelector } from '@shared/model';
import { PROFILE_INFO_EDITOR_ID } from '../consts/profile-info-editor-ID';

const EditorSubmitButton = () => {
  const isDisabled = useAppSelector(selectIsActionDisabled);

  return (
    <SubmitButton
      size="small"
      form={PROFILE_INFO_EDITOR_ID}
      disabled={isDisabled}
    >
      Apply all
    </SubmitButton>
  );
};

export default EditorSubmitButton;
