import { useLocation } from 'react-router-dom';

interface UseRedirectReturn {
  redirectedFrom: string;
}

export const useRedirect = ({
  altRoute,
}: {
  altRoute: string;
}): UseRedirectReturn => {
  const location = useLocation();
  const redirectedFrom: string = location.state?.from?.pathname || altRoute;

  return { redirectedFrom };
};
