import React, { useContext, useEffect, useMemo } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import { EmployeeContext } from '../../Data/EmployeeContext';

const TableComponent = () => {

    const { employees } = useContext(EmployeeContext);
    console.log("Employees in Table:", employees);
    useEffect(() => {
        console.log("TableComponent updated with employees:", employees);
    }, [employees]);

    const formatDate = (date) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      };      

    const columns = useMemo(() => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        {
            Header: 'Start Date',
            accessor: 'startDate',
            Cell: ({ value }) => formatDate(value)
          },
        { Header: 'Department', accessor: 'department' },
        {
            Header: 'Date of Birth',
            accessor: 'dateOfBirth',
            Cell: ({ value }) => formatDate(value)
          },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data: employees }, useFilters, usePagination);

  return (
    <>
      <h2>Current Employees</h2>
      <div>
        Show
        <input
          type="number"
          defaultValue={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        />
        entries
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
      <div>
        Showing {pageIndex * pageSize + 1} to {pageIndex * pageSize + page.length} of {pageOptions.length * pageSize} entries
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
    </>
  );
};

export default TableComponent;
