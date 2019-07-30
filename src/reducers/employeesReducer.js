import { GET_EMPLOYEES_LIST, GET_EMPLOYEE_DETAIL } from '../actionsTypes';

const initialState = {
  employees_list: 
    [
      {
        "id":"4343",
        "employee_name":"Mrs. Brent Willms",
        "employee_salary":"158200",
        "employee_age":"27",
        "profile_image":""
      },
      {"id":"4346",
      "employee_name":"Dr. Williams Junco",
      "employee_salary":"15000",
      "employee_age":"35",
      "profile_image":""}
    ],
  employee_detail: 
    {
      "id":"4343",
      "employee_name":"Mrs. Brent Willms",
      "employee_salary":"158200",
      "employee_age":"27",
      "profile_image":"https://facebook.github.io/create-react-app/img/logo.svg"
    },
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_LIST:
      return {
        ...state,
        employees_list: action.payload.data,
      };
    case GET_EMPLOYEE_DETAIL: 
      return {
        ...state,
        employee_detail: action.payload.data,
      };
    default:
      return state
  }
};