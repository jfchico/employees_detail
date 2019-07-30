import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getEmployeeDetail} from '../../actions/employeesActions';

class EmployeeDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
      loadingRequest: false,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    let state = prevState;
    if (nextProps.employee !== prevState.employee) {
      state = {
        ...prevState, 
        employee: nextProps.employee,
        loadingRequest: false,
      };
    }

    return state;
  };

  componentDidMount = () => {
    const {match, getEmployeeDetail} = this.props;
    getEmployeeDetail(match.params.id);
    this.setState({loadingRequest: true});
  }

  render = () => {
    const {match} = this.props;
    const {employee, loadingRequest} = this.state

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
    } else if (!loadingRequest){
      return <h3>{`The employee number ${match.params.id} does not exist.`}</h3>
    } else {
      return <h3>Loading employee details...</h3>;
    }
  };
}

const mapStateToProps = (state) => {
  return {
    employee: state.employees.employee_detail,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeeDetail: id => dispatch(getEmployeeDetail(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeDetailContainer);