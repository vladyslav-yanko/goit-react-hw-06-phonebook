import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={'loading'} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
