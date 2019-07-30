import { GET_EMPLOYEES_LIST, GET_EMPLOYEE_DETAIL } from '../actionsTypes';

const initialState = {
  employees_list: [],
  employee_detail: null,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_LIST:
      return {
        ...state,
        employees_list: action.payload,
      };
    case GET_EMPLOYEE_DETAIL: 
      return {
        ...state,
        employee_detail: action.payload,
      };
    default:
      return state
  }
};