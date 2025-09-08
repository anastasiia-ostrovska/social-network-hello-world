import { useFormContext } from 'react-hook-form';
import { ButtonProps } from '@mui/material';
import { forwardRef } from 'react';
import { AppButton } from '@shared/ui';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface ResetInputButtonProps extends ButtonProps {
  label: string;
  inputName: string;
  isIconButton?: boolean;
}

const ResetInputButton = forwardRef<HTMLButtonElement, ResetInputButtonProps>(
  ({ label, inputName, isIconButton = false, ...buttonProps }, ref) => {
    const { resetField } = useFormContext();

    const handleResetInput = () => {
      resetField(inputName, { keepDirty: true });
    };

    return (
      <AppButton
        ref={ref}
        label={label}
        size="small"
        variant="outlined"
        isIconButton={isIconButton}
        icon={<RestartAltIcon />}
        onClick={handleResetInput}
        {...buttonProps}
      />
    );
  }
);

ResetInputButton.displayName = 'ResetInputButton';
export default ResetInputButton;
