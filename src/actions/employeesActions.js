import axios from 'axios';

import {GET_EMPLOYEES_LIST_URL, GET_EMPLOYEE_DETAIL_URL} from '../api.endpoints';
import { GET_EMPLOYEES_LIST, GET_EMPLOYEE_DETAIL } from '../actionsTypes';

export const getEmployeesList = () => {
  return dispatch => {
    axios.get(GET_EMPLOYEES_LIST_URL).then(
      res => {
        dispatch (
          {
            type: GET_EMPLOYEES_LIST,
            payload: res.data,
          }
        );
      }
    )
  };
};
export const getEmployeeDetail = id => {
  return dispatch => {
    axios.get(GET_EMPLOYEE_DETAIL_URL(id)).then(
      res => {
        dispatch (
          {
            type: GET_EMPLOYEE_DETAIL,
            payload: res.data,
          }
        );
      }
    )
  };
};