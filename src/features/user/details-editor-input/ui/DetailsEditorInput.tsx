import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Styles } from '@shared/model';
import {
  ControlledTextField,
  ControlledTextFieldWithTypeAttribute,
} from '@shared/forms';
import { ResetInputButton } from '@features/change-input-value-buttons';

const DetailsEditorInputLayout = ({
  children,
  sx = {},
}: {
  children: ReactNode;
  sx?: Styles;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ width: '100%', ...sx }}
    >
      {children}
    </Stack>
  );
};

interface DetailsEditorInputProps extends ControlledTextFieldWithTypeAttribute {
  defaultValue: string;
  sx?: Styles;
}

/**
 * DetailsEditorInput is a functional component that renders an input field
 * with additional features including a tooltip displaying a default value
 * and a reset button to reset the input value to its default.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.defaultValue - The default value displayed in the tooltip.
 * @param {Object} [props.sx={}] - Optional styles to apply to the layout container.
 * @param {Object} [props.props] - Additional props passed to the ControlledTextField component.
 * @returns  A component rendering a controlled input field with tooltip and reset functionality.
 */

const DetailsEditorInput = ({
  name,
  defaultValue,
  sx = {},
  ...props
}: DetailsEditorInputProps) => {
  return (
    <DetailsEditorInputLayout sx={sx}>
      <ControlledTextField name={name} {...props} fullWidth />
      <Tooltip title={defaultValue} placement="left">
        <ResetInputButton
          label="Reset"
          inputName={name}
          isIconButton
          sx={{ height: 'fit-content', color: 'text.secondary' }}
        />
      </Tooltip>
    </DetailsEditorInputLayout>
  );
};

export default DetailsEditorInput;
