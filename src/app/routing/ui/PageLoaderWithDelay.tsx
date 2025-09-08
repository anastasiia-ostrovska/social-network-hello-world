import { useMediaQueryState } from '@shared/lib';
import { Delayed } from '@shared/ui';
import PageLoader from './PageLoader';

const PAGE_LOADER_DELAY = 100;

enum CircularLoaderSize {
  Small = 60,
  Medium = 80,
}

const PageLoaderWithDelay = () => {
  const { isUpMD } = useMediaQueryState();
  const spinnerSize = isUpMD
    ? CircularLoaderSize.Medium
    : CircularLoaderSize.Small;

  return (
    <Delayed delay={PAGE_LOADER_DELAY}>
      <PageLoader spinnerSize={spinnerSize} />
    </Delayed>
  );
};

export default PageLoaderWithDelay;
