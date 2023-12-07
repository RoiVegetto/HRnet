import React from 'react';
import { Link } from 'react-router-dom';

function HeaderIndex() {
  return (
    <header>
        <h1>HRnet</h1>
        <Link to="./EmployeeList">View Current Employees</Link>
    </header>
  );
}

export default HeaderIndex;
