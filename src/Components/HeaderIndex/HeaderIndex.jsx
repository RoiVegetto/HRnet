import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderIndex.css';

function HeaderIndex({ logo }) {
  const currentPage = window.location.pathname;

  return (
    <header>
      <div className='logoTitle'>
        <h1>HRnet</h1>
        <img src={logo} alt='Logo HRnet'/>
      </div>
      {currentPage !== "/EmployeeList" && (
        <Link to="/EmployeeList">View Current Employees</Link>
      )}
      {currentPage !== "/" && (
        <Link to="/">Home</Link>
      )}
    </header>
  );
}

export default HeaderIndex;
