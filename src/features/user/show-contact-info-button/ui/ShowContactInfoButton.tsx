import { Button, ButtonProps } from '@mui/material';
import { SkeletonWrapper } from '@shared/ui';

interface ShowContactInfoButtonProps extends ButtonProps {
  isLoading: boolean;
}

const ShowContactInfoButton = ({
  isLoading,
  sx = {},
  ...buttonProps
}: ShowContactInfoButtonProps) => {
  return (
    <SkeletonWrapper
      isLoading={isLoading}
      element={
        <Button
          variant="text"
          size="small"
          sx={{ ml: '-5px', ...sx }}
          {...buttonProps}
        >
          Contact info
        </Button>
      }
    />
  );
};

export default ShowContactInfoButton;
