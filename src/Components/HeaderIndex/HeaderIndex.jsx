import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderIndex.css';

function HeaderIndex({ logo }) {
  return (
    <header>
      <div className='logoTitle'>
        <h1>HRnet</h1>
        <img src={logo} alt='Logo HRnet'/>
      </div>
        <Link to="/EmployeeList">View Current Employees</Link>
    </header>
  );
}

export default HeaderIndex;