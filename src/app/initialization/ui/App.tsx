import { Routing } from '@app/routing';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { userId, isInitialized } = useInitializeApp();

  return isInitialized ? <Routing userId={userId} /> : <AppLoader />;
};

export default App;
