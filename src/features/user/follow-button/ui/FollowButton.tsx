import { Styles } from '@shared/model';
import Button from '@mui/material/Button';
import { SkeletonWrapper } from '@shared/ui';
import { useFollowButton } from '../model/useFollowButton';

export interface FollowButtonProps {
  userId: string;
  isLoading?: boolean;
  sx?: Styles;
}

const FollowButton = ({
  userId,
  isLoading = false,
  sx = {},
}: FollowButtonProps) => {
  const { label, variant, isDisabled, isButtonDataLoading, handleButtonClick } =
    useFollowButton({
      userId,
      isLoading,
    });

  return (
    <SkeletonWrapper
      isLoading={isButtonDataLoading}
      element={
        <Button
          variant={variant}
          disabled={isDisabled}
          onClick={handleButtonClick}
          sx={{ ...sx }}
        >
          {label}
        </Button>
      }
      sx={{ borderRadius: '2rem', width: '100%' }}
    />
  );
};

export default FollowButton;
