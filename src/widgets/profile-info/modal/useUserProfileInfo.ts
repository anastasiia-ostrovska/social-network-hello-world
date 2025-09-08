import {
  UserWithInfo,
  useUserMeQuery,
  useUserWithFallback,
} from '@entities/user';
import { useImagesSize } from '../lib/useImagesSize';
import { useProfileInfoErrorHandling } from './useProfileInfoErrorHandling';

interface UseUserProfileInfoResult {
  user: UserWithInfo;
  isLoading: boolean;
  isError: boolean;
  isMyProfile: boolean;
  networkCount: {
    following: number;
    followedBy: number;
  };
  imageSize: number;
}

export const useUserProfileInfo = ({
  userId,
}: {
  userId: string;
}): UseUserProfileInfoResult => {
  const { user, error, isError, isLoading } = useUserWithFallback({ userId });
  const { data: myData } = useUserMeQuery();
  const { id: myId } = myData?.data || {};

  const isMyProfile = userId === myId;
  const networkCount = {
    following: user.following.length,
    followedBy: user.followedBy.length,
  };

  useProfileInfoErrorHandling({ error });
  const { imageSize } = useImagesSize();

  return { user, isLoading, isError, isMyProfile, networkCount, imageSize };
};
