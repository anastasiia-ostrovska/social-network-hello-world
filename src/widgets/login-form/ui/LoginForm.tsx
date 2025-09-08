import { FormProvider } from 'react-hook-form';
import { Form, SubmitButton } from '@/shared/forms';
import {
  EmailInput,
  FillGuestDataButton,
  PasswordInput,
} from '@features/login';
import { ErrorEmbeddedNotification } from '@/features/notification';
import { useLoginForm } from '../model/useLoginForm';
import { LOGIN_ERROR_MESSAGES } from '../consts/error-messages';
import {
  FormGuestDataLayout,
  FormHeaderLayout,
  FormInputsLayout,
  LoginFormBlockLayout,
} from './LoginFormLayouts';

const LoginForm = () => {
  const {
    methods,
    handleFormSubmit,
    isSubmitButtonDisabled,
    isLogInRequestLoading,
    error,
  } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <LoginFormBlockLayout
        header={<FormHeaderLayout heading="Log in" />}
        guestDataHelper={
          <FormGuestDataLayout
            text="* Please, use the Guest credentials to log in."
            button={<FillGuestDataButton isDisabled={isLogInRequestLoading} />}
          />
        }
        errorNotification={
          <ErrorEmbeddedNotification
            error={error}
            errorMessages={LOGIN_ERROR_MESSAGES}
            withCloseButton
          />
        }
        form={
          <Form onSubmit={handleFormSubmit} spacing={3}>
            <FormInputsLayout
              email={<EmailInput isDisabled={isLogInRequestLoading} />}
              password={<PasswordInput isDisabled={isLogInRequestLoading} />}
            />
            <SubmitButton disabled={isSubmitButtonDisabled}>
              Log in
            </SubmitButton>
          </Form>
        }
      />
    </FormProvider>
  );
};

export default LoginForm;
