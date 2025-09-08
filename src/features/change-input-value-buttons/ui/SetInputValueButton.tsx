import { useFormContext } from 'react-hook-form';
import { ButtonProps } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppButton } from '@shared/ui';
import { forwardRef } from 'react';

interface SetInputValueButtonProps extends ButtonProps {
  label: string;
  inputName: string;
  newValue: unknown;
  isIconButton?: boolean;
}

const SetInputValueButton = forwardRef<
  HTMLButtonElement,
  SetInputValueButtonProps
>(
  (
    { label, inputName, newValue, isIconButton = false, ...buttonProps },
    ref
  ) => {
    const { setValue } = useFormContext();

    const handleSetValue = () => {
      setValue(inputName, newValue, { shouldDirty: true });
    };

    return (
      <AppButton
        ref={ref}
        label={label}
        size="small"
        variant="outlined"
        isIconButton={isIconButton}
        icon={<DeleteIcon />}
        onClick={handleSetValue}
        {...buttonProps}
      />
    );
  }
);

SetInputValueButton.displayName = 'SetInputValueButton';
export default SetInputValueButton;
