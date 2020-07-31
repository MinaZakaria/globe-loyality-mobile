import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { promisesMiddleware } from '../middlewares/promises';

import sagas from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(
    promisesMiddleware,
    sagaMiddleware
  )
);

sagaMiddleware.run(sagas);

export default store;
