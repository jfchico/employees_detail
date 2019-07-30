import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getEmployeesList} from '../../actions/employeesActions';

class EmployeesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loadingRequest: false,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    let state = prevState;
    if (nextProps.list !== prevState.list) {
      state = {
        ...prevState, 
        list: nextProps.list,
        loadingRequest: false,
      };
    }

    return state;
  };

  componentDidMount = () => {
    this.props.getEmployeesList();
    this.setState({loadingRequest: true});
  };

  render = () => {
    const {history} = this.props;
    const {list, loadingRequest} = this.state;

    return (
      <div className="employees-list">
        <h1>Employees</h1>
        {list.length > 0 ?
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
          :
          !loadingRequest ? <h3>The employees list is empty</h3> : <h3>Loading employees list...</h3>
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.employees.employees_list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeesList: () => dispatch(getEmployeesList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeesListContainer);