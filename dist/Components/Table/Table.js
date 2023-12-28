"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTable = require("react-table");
var _EmployeeContext = require("../../Data/EmployeeContext");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("./Table.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableComponent = () => {
  const {
    employees
  } = (0, _react.useContext)(_EmployeeContext.EmployeeContext);
  const [filterInput, setFilterInput] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    console.log("TableComponent updated with employees:", employees);
  }, [employees]);
  const columns = (0, _react.useMemo)(() => [{
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Start Date',
    accessor: 'startDate'
  }, {
    Header: 'Department',
    accessor: 'department'
  }, {
    Header: 'Date of Birth',
    accessor: 'dateOfBirth'
  }, {
    Header: 'Street',
    accessor: 'street'
  }, {
    Header: 'City',
    accessor: 'city'
  }, {
    Header: 'State',
    accessor: 'state'
  }, {
    Header: 'Zip Code',
    accessor: 'zipCode'
  }], []);
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
    state: {
      pageIndex,
      pageSize
    },
    setGlobalFilter
  } = (0, _reactTable.useTable)({
    columns,
    data: employees,
    initialState: {
      globalFilter: ''
    },
    filterTypes: {
      globalFilter
    }
  }, _reactTable.useGlobalFilter, _reactTable.useFilters, _reactTable.useSortBy, _reactTable.usePagination);
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, "Current Employees"), /*#__PURE__*/_react.default.createElement("div", {
    className: "headerList"
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Number of list",
    type: "number",
    defaultValue: pageSize,
    min: 1,
    onChange: e => {
      let pageSize = e.target.value ? Number(e.target.value) : 10;
      pageSize = Math.max(pageSize, 1); // Cette ligne sert a mettre 1 même si l'utilisateur renseigne une valeur 0 ou moins
      setPageSize(pageSize);
    }
  }), /*#__PURE__*/_react.default.createElement("input", {
    value: filterInput,
    onChange: handleFilterChange,
    placeholder: "Search in list"
  })), /*#__PURE__*/_react.default.createElement("table", getTableProps(), /*#__PURE__*/_react.default.createElement("thead", {
    className: "list"
  }, headerGroups.map(headerGroup => /*#__PURE__*/_react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(column => /*#__PURE__*/_react.default.createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render('Header'), /*#__PURE__*/_react.default.createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortUp
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSort
  }))))))), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), page.map(row => {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), row.cells.map(cell => /*#__PURE__*/_react.default.createElement("td", cell.getCellProps(), cell.render('Cell'))));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footerList"
  }, "Showing ", pageIndex * pageSize + 1, " to ", pageIndex * pageSize + page.length, " of ", employees.length, " entries", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => gotoPage(0),
    disabled: !canPreviousPage
  }, '<<'), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => previousPage(),
    disabled: !canPreviousPage
  }, '<'), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => nextPage(),
    disabled: !canNextPage
  }, '>'), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => gotoPage(pageCount - 1),
    disabled: !canNextPage
  }, '>>'))));
};
var _default = exports.default = TableComponent;