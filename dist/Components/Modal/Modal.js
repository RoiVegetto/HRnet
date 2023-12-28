"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _modalreact = _interopRequireDefault(require("@roivegetto/modalreact"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function AppModal(_ref) {
  let {
    show,
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement(_modalreact.default, {
    isOpen: show,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("h2", null, "Employee Created Successfully"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "Close"));
}
;
var _default = exports.default = AppModal;