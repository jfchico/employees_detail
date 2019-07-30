import { combineReducers } from 'redux';
import { employeesReducer as employees } from './employeesReducer';

export const reducers =  combineReducers({
  employees,
});