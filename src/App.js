import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import EmployeeDetail from './routes/employeeDetail';
import EmployeesList from './routes/employeesList';

import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={EmployeesList} />
        <Route path="/employee/:id" component={EmployeeDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
