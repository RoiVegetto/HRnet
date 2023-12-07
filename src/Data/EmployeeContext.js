import React, { useState, createContext } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => {
      const newEmployees = [...prevEmployees, employee];
      console.log('New Employees:', newEmployees);
      return newEmployees;
    });
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {console.log('Providing employees:', employees)}
      {children}
    </EmployeeContext.Provider>
  );
};
