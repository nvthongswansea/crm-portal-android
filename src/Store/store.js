import reducer from '../Reducers/index';
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../Sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(promise(), sagaMiddleware)(createStore)(reducer);
sagaMiddleware.run(sagas);
export default store;