import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormContext } from 'react-hook-form';
import { UploadFileButtonProps } from '../model/types';

const UploadFileButton = ({
  inputName,
  label = 'Upload',
  accept = 'image/*',
  ...buttonMuiProps
}: UploadFileButtonProps) => {
  const { register } = useFormContext();

  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      size="small"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      {...buttonMuiProps}
    >
      {label}
      <input
        {...register(inputName)}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
      />
    </Button>
  );
};

export default UploadFileButton;
