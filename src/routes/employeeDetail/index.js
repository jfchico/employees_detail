import React from 'react';

const EmployeeDetail = (props) => {
  const {params} = props.match;
  return (<h1>{`I am employee number ${params.id}`}</h1>)
}

export default EmployeeDetail;