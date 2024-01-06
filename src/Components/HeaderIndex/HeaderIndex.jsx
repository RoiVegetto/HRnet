import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

HeaderIndex.propTypes = {
  logo: PropTypes.string
};

export default HeaderIndex;
