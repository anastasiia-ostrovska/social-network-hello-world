import { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';

const SubmitButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
