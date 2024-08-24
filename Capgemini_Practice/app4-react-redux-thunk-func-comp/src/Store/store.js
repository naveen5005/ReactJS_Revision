import {createStore,applyMiddleware} from 'redux';
import { userLoginsReducer } from './reducer';
import {thunk} from 'redux-thunk';

export const store = createStore(userLoginsReducer,applyMiddleware(thunk));