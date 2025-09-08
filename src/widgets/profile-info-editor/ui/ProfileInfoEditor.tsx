import { FormProvider } from 'react-hook-form';
import { Form } from '@shared/forms';
import { DetailsEditorInput } from '@features/user';
import { PROFILE_INFO_EDITOR_ID } from '../consts/profile-info-editor-ID';
import { useProfileInfoEditor } from '../model/useProfileInfoEditor';
import ProfileInfoEditorLayout from './ProfileInfoEditorLayout';

const ProfileInfoEditor = () => {
  const {
    methods,
    handleApplyChanges,
    contactItems,
    userInfoItems,
    defaultValues,
    isDisabledForm,
  } = useProfileInfoEditor();

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={handleApplyChanges}
        id={PROFILE_INFO_EDITOR_ID}
        sx={{ pointerEvents: isDisabledForm ? 'none' : 'auto' }}
      >
        <ProfileInfoEditorLayout
          contactsHeading="Contacts"
          infoInputs={userInfoItems.map(([name, item]) => {
            return (
              <DetailsEditorInput
                key={name}
                {...item}
                disabled={isDisabledForm}
                defaultValue={defaultValues[name]}
              />
            );
          })}
          contactInputs={contactItems.map(([name, item]) => {
            return (
              <DetailsEditorInput
                key={name}
                {...item}
                disabled={isDisabledForm}
                defaultValue={defaultValues[name]}
              />
            );
          })}
        />
      </Form>
    </FormProvider>
  );
};

export default ProfileInfoEditor;
