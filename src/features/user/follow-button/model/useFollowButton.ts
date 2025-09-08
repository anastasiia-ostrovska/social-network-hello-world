import { useToggleFollowUserMutation } from '@entities/user';
import { useErrorPopupNotification } from '@entities/notification';
import { ButtonLabel, ButtonVariant } from './types';
import { useIsFollowed } from '../lib/useIsFollowed';

interface FollowButtonParams {
  userId: string;
  isLoading: boolean;
}

interface UseFollowButtonResult {
  label: ButtonLabel;
  variant: ButtonVariant;
  isDisabled: boolean;
  isButtonDataLoading: boolean;
  handleButtonClick: () => void;
}

export const useFollowButton = ({
  userId,
  isLoading,
}: FollowButtonParams): UseFollowButtonResult => {
  const { isFollowed, isFollowedLoading } = useIsFollowed(userId);
  const [toggleFollowUser, { isLoading: isTogglingFollow, error }] =
    useToggleFollowUserMutation();
  useErrorPopupNotification({ error });

  const isButtonDataLoading =
    isLoading || isFollowedLoading || isFollowed === undefined;
  const isDisabled = isButtonDataLoading || isTogglingFollow;
  const label = isFollowed ? ButtonLabel.Unfollow : ButtonLabel.Follow;
  const variant = isFollowed ? ButtonVariant.Outlined : ButtonVariant.Contained;

  const handleButtonClick = () => {
    toggleFollowUser(userId);
  };

  return { label, variant, isDisabled, isButtonDataLoading, handleButtonClick };
};
