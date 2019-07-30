import React from 'react';
import {connect} from 'react-redux';

const EmployeesListContainer = (props) => {
  const {list, history} = props;

  return (
    <div className="employees-list">
      <h1>Employees</h1>
      <ul>
        {
          list.map(employee => 
            <li 
              key={employee.id} 
              onClick={() => history.push(`/employee/${employee.id}`)}>
                <h2>{employee.employee_name}</h2>
            </li>
          )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.employees.employees_list,
  }
};

export default connect(
  mapStateToProps,
)(EmployeesListContainer);