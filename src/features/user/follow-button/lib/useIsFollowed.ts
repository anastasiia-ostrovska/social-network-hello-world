import { useUserMeQuery } from '@entities/user';
import { useEffect, useState } from 'react';

type IsFollowed = boolean | undefined;

interface UseIsFollowedResult {
  isFollowed: IsFollowed;
  isFollowedLoading: boolean;
}

export const useIsFollowed = (userId: string): UseIsFollowedResult => {
  const { data: myData, isLoading: isMyDataLoading } = useUserMeQuery();
  const [isFollowed, setIsFollowed] = useState<IsFollowed>(undefined);

  useEffect(() => {
    const usersFollowedByMe = myData?.data?.following;
    if (usersFollowedByMe) {
      const isUserFollowed = usersFollowedByMe.includes(userId);
      setIsFollowed(isUserFollowed);
    }
  }, [myData?.data?.following, userId]);

  return { isFollowed, isFollowedLoading: isMyDataLoading };
};
