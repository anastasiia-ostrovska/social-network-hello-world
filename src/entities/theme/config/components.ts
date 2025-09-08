import { ButtonProps, CheckboxProps, TextFieldProps } from '@mui/material';

const components = {
  MuiPaper: {
    defaultProps: {
      elevation: 2,
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small' as TextFieldProps['size'],
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: 'small' as CheckboxProps['size'],
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained' as ButtonProps['variant'],
    },
    styleOverrides: {
      root: {
        borderRadius: '2rem',
      },
    },
  },
};

export default components;
