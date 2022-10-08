import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import saga from './sagas';

// Config saga middleware
const sagaMiddleware = createSagaMiddleware();

// Config store
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(
        sagaMiddleware,
        logger,
    ),
});

// Run saga
sagaMiddleware.run(saga);

export default store;