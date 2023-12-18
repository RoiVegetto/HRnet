import React, { useState, createContext } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    };

    const addEmployee = (employee) => {
        const formattedEmployee = {
            ...employee,
            startDate: formatDate(employee.startDate),
            dateOfBirth: formatDate(employee.dateOfBirth)
        };

        setEmployees((prevEmployees) => [...prevEmployees, formattedEmployee]);
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
