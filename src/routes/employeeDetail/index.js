import React from 'react';
import {connect} from 'react-redux';

const EmployeeDetailContainer = (props) => {
  const {employee, match} = props;
  if (employee) {
    return (
      <>
        <h1>{employee.employee_name}</h1>
        <div className="employee-details">
          <span>{`ID: ${employee.id}`}</span>
          <span>{`Salary: ${employee.employee_salary}`}</span>
          <span>{`Age: ${employee.employee_age}`}</span>
          {employee.profile_image !== '' && <img src={employee.profile_image} alt={employee.employee_name} />}
        </div>
      </>
    );
  } else {
    return <h3>{`The employee number ${match.params.id} does not exist.`}</h3>
  }
};

const mapStateToProps = (state) => {
  return {
    employee: state.employees.employee_detail,
  }
};

export default connect(
  mapStateToProps,
)(EmployeeDetailContainer);