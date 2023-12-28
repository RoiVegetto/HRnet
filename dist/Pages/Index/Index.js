"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HeaderIndex = _interopRequireDefault(require("../../Components/HeaderIndex/HeaderIndex"));
var _Form = _interopRequireDefault(require("../../Components/Form/Form"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Index() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderIndex.default, {
    logo: 'Images/logoHRnet.png'
  }), /*#__PURE__*/_react.default.createElement(_Form.default, null));
}
var _default = exports.default = Index;