import { ControlledTextField } from '@shared/forms';
import { inputs } from '../config/input-items';

export const PasswordInput = ({ isDisabled }: { isDisabled: boolean }) => {
  return <ControlledTextField {...inputs.password} disabled={isDisabled} />;
};
