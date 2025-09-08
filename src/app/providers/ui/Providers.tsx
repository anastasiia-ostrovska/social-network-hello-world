import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import ThemeProvider from './ThemeProvider';

interface ProvidersProps {
  children: ReactElement;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
