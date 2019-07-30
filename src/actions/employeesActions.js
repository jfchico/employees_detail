import { GET_EMPLOYEES_LIST, GET_EMPLOYEE_DETAIL } from '../actionsTypes';

export const getEmployeesList = () => {
  return {
    type: GET_EMPLOYEES_LIST,
    payload:
      [
        {
          "id":"4343",
          "employee_name":"Mrs. Brent Willms",
          "employee_salary":"158200",
          "employee_age":"27",
          "profile_image":""
        },
        {
          "id":"4346",
          "employee_name":"Dr. Williams Junco",
          "employee_salary":"15000",
          "employee_age":"35",
          "profile_image":""
        },
      ],
  };
};
export const getEmployeeDetail = id => {
  return {
    type: GET_EMPLOYEE_DETAIL,
    payload:
      {
        "id":"4343",
        "employee_name":"Mrs. Brent Willms",
        "employee_salary":"158200",
        "employee_age":"27",
        "profile_image":"https://facebook.github.io/create-react-app/img/logo.svg"
      },
  };
};