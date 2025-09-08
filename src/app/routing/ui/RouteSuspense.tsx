import { ReactElement, Suspense } from 'react';
import PageLoaderWithDelay from './PageLoaderWithDelay';

interface RouteSuspenseProps {
  element: ReactElement;
  fallback?: ReactElement;
}

const defaultFallback = <PageLoaderWithDelay />;

const RouteSuspense = ({
  element,
  fallback = defaultFallback,
}: RouteSuspenseProps) => {
  return <Suspense fallback={fallback}>{element}</Suspense>;
};

export default RouteSuspense;
