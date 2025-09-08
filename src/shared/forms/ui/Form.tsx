import { BaseSyntheticEvent, ReactNode } from 'react';
import { Styles } from '@shared/model';
import Stack, { StackProps } from '@mui/material/Stack';

interface FormProps extends StackProps {
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  children?: ReactNode;
  sx?: Styles;
}

const Form = ({ onSubmit, children = null, sx = {}, ...props }: FormProps) => {
  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{ width: '100%', ...sx }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Form;
