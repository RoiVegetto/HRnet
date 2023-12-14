import React from 'react';
import Footer from '../../Components/Footer/Footer';
import TableComponent from '../../Components/Table/Table';
import './EmployeeList.css';

function EmployeeList() {
  return (
    <>
      <TableComponent />
      <Footer logo={'Images/logoHRnet.png'}/>
    </>
  );
}

export default EmployeeList;
