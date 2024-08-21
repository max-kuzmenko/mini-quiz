import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider as ReduxProvider} from 'react-redux';

import store from 'store';

import App from './app';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ReduxProvider store={store}>
          <App />
      </ReduxProvider>
  </React.StrictMode>
);
