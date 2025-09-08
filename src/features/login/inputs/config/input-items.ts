import { LoginField } from '@entities/session';
import {
  emailValidationRules,
  passwordValidationRules,
} from './validation-rules';

export const inputs = {
  email: {
    name: LoginField.Email,
    type: 'email',
    label: 'Email',
    autoComplete: 'email',
    helperText: 'in the format: example@domain.com',
    required: true,
    rules: {
      validate: emailValidationRules,
    },
  },
  password: {
    name: LoginField.Password,
    type: 'password',
    label: 'Password',
    autoComplete: 'current-password',
    helperText: '16+ chars, uppercase, number and symbol',
    required: true,
    rules: {
      validate: passwordValidationRules,
    },
  },
};
