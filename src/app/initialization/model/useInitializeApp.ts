import { useAppSelector } from '@shared/model';
import { selectToken, useAuthMeQuery } from '@entities/session';

interface UseInitializeAppResult {
  userId: string | undefined;
  isInitialized: boolean;
}

const useInitializeApp = (): UseInitializeAppResult => {
  const token = useAppSelector(selectToken);
  const { data: authData, isLoading: isAuthLoading } = useAuthMeQuery(
    undefined,
    {
      skip: !token,
    }
  );

  const userId = authData?.data?.userId;

  return { userId, isInitialized: !isAuthLoading };
};

export default useInitializeApp;
