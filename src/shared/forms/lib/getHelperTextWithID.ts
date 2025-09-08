import { FieldError } from 'react-hook-form';
import { ControlledInputProps } from '../model/types';

interface GetHelperTextParams
  extends Required<
    Pick<ControlledInputProps, 'name' | 'showError' | 'helperText'>
  > {
  error: FieldError | undefined;
}

interface HelperTextWithID {
  text: string;
  id: string | undefined;
}

const getHelperTextWithID = ({
  name,
  error,
  showError,
  helperText,
}: GetHelperTextParams): HelperTextWithID => {
  const helperTextId = `${name}-helper-text`;

  if (error?.message && showError) {
    return { text: error.message, id: helperTextId };
  }

  return { text: helperText, id: helperText ? helperTextId : undefined };
};

export default getHelperTextWithID;
