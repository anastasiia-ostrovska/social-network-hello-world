import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { ControlledTextFieldWithTypeAttribute } from '../model/types';
import getHelperTextWithID from '../lib/getHelperTextWithID';

const ControlledTextField = ({
  name,
  type = 'text',
  label = '',
  helperText = '',
  required = false,
  showError = true,
  rules = {},
  ...textFieldMuiProps
}: ControlledTextFieldWithTypeAttribute) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const { text } = getHelperTextWithID({
          name,
          error,
          showError,
          helperText,
        });

        return (
          <TextField
            {...textFieldMuiProps}
            {...field}
            required={required}
            label={label}
            type={type}
            error={!!error}
            helperText={text}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;
