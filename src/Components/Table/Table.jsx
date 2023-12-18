import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTable, usePagination, useFilters, useSortBy, useGlobalFilter } from 'react-table';
import { EmployeeContext } from '../../Data/EmployeeContext';
import './Table.css';

const TableComponent = () => {
    const { employees } = useContext(EmployeeContext);
    const [filterInput, setFilterInput] = useState("");

    useEffect(() => {
        console.log("TableComponent updated with employees:", employees);
    }, [employees]);

    const columns = useMemo(() => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' }
    ], []);

    const globalFilter = (rows, columns, filterValue) => {
        if (!filterValue) return rows;

        const lowercaseFilterValue = filterValue.toLowerCase();

        return rows.filter(row => {
            return row.cells.some(cell => {
                return String(cell.value).toLowerCase().includes(lowercaseFilterValue);
            });
        });
    };    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data: employees,
            initialState: { globalFilter: '' },
            filterTypes: { globalFilter },
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
        setFilterInput(value);
    };

    return (
        <>
            <h2>Current Employees</h2>
            <div className='headerList'>
            <input
                placeholder="Number of list"
                type="number"
                defaultValue={pageSize}
                min={1}
                onChange={e => {
                    let pageSize = e.target.value ? Number(e.target.value) : 10;
                    pageSize = Math.max(pageSize, 1); // Cette ligne sert a mettre 1 même si l'utilisateur renseigne une valeur 0 ou moins
                    setPageSize(pageSize);
                }}
            />
            <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search in list"}
            />
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? (column.isSortedDesc ? ' 🔽' : ' 🔼')
                                        : ' 🔼'}
                                </span>
                            </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='footerList'>
                Showing {pageIndex * pageSize + 1} to {pageIndex * pageSize + page.length} of {employees.length} entries
                <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                </div>
            </div>
        </>
    );
};

export default TableComponent;
