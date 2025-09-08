import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from '@app/providers';
import { App } from '@app/initialization';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
