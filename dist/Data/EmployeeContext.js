"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeProvider = exports.EmployeeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const EmployeeContext = exports.EmployeeContext = /*#__PURE__*/(0, _react.createContext)();
const EmployeeProvider = _ref => {
  let {
    children
  } = _ref;
  const [employees, setEmployees] = (0, _react.useState)([]);
  const formatDate = date => {
    if (!date) return '';
    const d = new Date(date);
    return "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear());
  };
  const addEmployee = employee => {
    const formattedEmployee = {
      ...employee,
      startDate: formatDate(employee.startDate),
      dateOfBirth: formatDate(employee.dateOfBirth)
    };
    setEmployees(prevEmployees => [...prevEmployees, formattedEmployee]);
  };
  return /*#__PURE__*/_react.default.createElement(EmployeeContext.Provider, {
    value: {
      employees,
      addEmployee
    }
  }, children);
};
exports.EmployeeProvider = EmployeeProvider;