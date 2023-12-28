"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./Footer.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Footer(_ref) {
  let {
    logo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "Logo HRnet"
  }));
}
var _default = exports.default = Footer;