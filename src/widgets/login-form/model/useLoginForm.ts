import { BaseSyntheticEvent, useEffect } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { useAppDispatch } from '@shared/model';
import {
  LoginData,
  LoginField,
  storeAccessToken,
  useLoginMutation,
} from '@entities/session';

interface UseLogInFormResult {
  methods: UseFormReturn<LoginData>;
  handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isSubmitButtonDisabled: boolean;
  isLogInRequestLoading: boolean;
  error: unknown;
}

export const useLoginForm = (): UseLogInFormResult => {
  const methods = useForm<LoginData>({
    defaultValues: {
      [LoginField.Email]: '',
      [LoginField.Password]: '',
    },
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields, isSubmitting, isSubmitSuccessful },
  } = methods;
  const [
    login,
    {
      isLoading: isLoginRequestLoading,
      isSuccess: loginRequestSuccess,
      data: loginResponse,
      error,
    },
  ] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful && loginRequestSuccess) {
      reset();
      dispatch(storeAccessToken(loginResponse.data.token));
    }
  }, [isSubmitSuccessful, loginRequestSuccess, reset, loginResponse, dispatch]);

  const isEmptyField = !dirtyFields.email || !dirtyFields.password;
  const isSubmitButtonDisabled =
    isEmptyField || isSubmitting || isLoginRequestLoading;

  const handleFormSubmit: SubmitHandler<LoginData> = (data) => {
    login(data);
  };

  return {
    methods,
    handleFormSubmit: handleSubmit(handleFormSubmit),
    isSubmitButtonDisabled,
    isLogInRequestLoading: isLoginRequestLoading,
    error,
  };
};
