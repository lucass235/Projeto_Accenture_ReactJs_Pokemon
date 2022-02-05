import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers/index';
import rootSaga from '../sagas/pokemon.saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootSaga);