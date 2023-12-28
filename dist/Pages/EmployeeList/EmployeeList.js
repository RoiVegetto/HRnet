"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("../../Components/Footer/Footer"));
var _Table = _interopRequireDefault(require("../../Components/Table/Table"));
require("./EmployeeList.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function EmployeeList() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Table.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    logo: 'Images/logoHRnet.png'
  }));
}
var _default = exports.default = EmployeeList;