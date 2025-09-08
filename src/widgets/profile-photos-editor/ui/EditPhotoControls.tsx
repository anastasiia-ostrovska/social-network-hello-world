import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { UploadFileButton } from '@shared/forms';
import { PhotoAction } from '@entities/user';
import {
  ResetInputButton,
  SetInputValueButton,
} from '@features/change-input-value-buttons';

const EditPhotoControlsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: '100%',
        maxWidth: { sm: 400 },
        justifyContent: 'space-between',
        justifySelf: 'end',
      }}
    >
      {children}
    </Stack>
  );
};

interface EditPhotoControlsProps {
  inputName: string;
  uploadLabel: string;
  isDisabled?: boolean;
}

const EditPhotoControls = ({
  inputName,
  uploadLabel,
  isDisabled = false,
}: EditPhotoControlsProps) => {
  return (
    <EditPhotoControlsLayout>
      <UploadFileButton
        inputName={inputName}
        label={uploadLabel}
        disabled={isDisabled}
        sx={{ minWidth: 95, width: '100%' }}
      />
      <ResetInputButton
        inputName={inputName}
        label="Reset"
        disabled={isDisabled}
        sx={{ width: '100%' }}
      />
      <SetInputValueButton
        label="Delete"
        inputName={inputName}
        newValue={PhotoAction.Delete}
        disabled={isDisabled}
        sx={{ width: '100%' }}
      />
    </EditPhotoControlsLayout>
  );
};

export default EditPhotoControls;
