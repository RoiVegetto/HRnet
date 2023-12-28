import React from 'react';
import TableComponent from '../../Components/Table/Table';
import HeaderIndex from '../../Components/HeaderIndex/HeaderIndex';
import './EmployeeList.css';

function EmployeeList() {
  return (
    <>
      <HeaderIndex logo={'Images/logoHRnet.png'} />
      <TableComponent />
    </>
  );
}

export default EmployeeList;
