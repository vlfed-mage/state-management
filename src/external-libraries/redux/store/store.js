import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducer';

const store = createStore(combineReducers({ todosReducer }));

export default store;
