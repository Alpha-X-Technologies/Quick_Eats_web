import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware,loggerMiddleware)
));

export default store;