"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _Index = _interopRequireDefault(require("./Pages/Index/Index"));
var _EmployeeList = _interopRequireDefault(require("./Pages/EmployeeList/EmployeeList"));
var _EmployeeContext = require("./Data/EmployeeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement(_EmployeeContext.EmployeeProvider, null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Index.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/employeeList",
    element: /*#__PURE__*/React.createElement(_EmployeeList.default, null)
  }))));
}
var _default = exports.default = App;