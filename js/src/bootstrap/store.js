import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import sagas from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware
  )
);

sagaMiddleware.run(sagas);

export default store;
