import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import dotenv from 'dotenv';

import './index.css';
import App from './App';
import reducers from './redux/reducers';
import saga from './redux/sagas';

// Config dotenv
dotenv.config();

// Config saga middleware
const sagaMiddleware = createSagaMiddleware();
// Config store
const store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware, logger));
// Run saga
sagaMiddleware.run(saga);

// Render app that is wrapped by Redux
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
