"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./HeaderIndex.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HeaderIndex(_ref) {
  let {
    logo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "logoTitle"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "HRnet"), /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "Logo HRnet"
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/EmployeeList"
  }, "View Current Employees"));
}
var _default = exports.default = HeaderIndex;