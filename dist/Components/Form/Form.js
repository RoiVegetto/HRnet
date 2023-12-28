"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _States = _interopRequireDefault(require("../../Data/States"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
require("./Form.css");
var _EmployeeContext = require("../../Data/EmployeeContext");
var _Modal = _interopRequireDefault(require("../Modal/Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Form() {
  const {
    addEmployee
  } = (0, _react.useContext)(_EmployeeContext.EmployeeContext);
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(formData).some(value => value !== '' && value !== null)) {
      addEmployee(formData);
      setShowModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
      });
    }
  };
  const [formData, setFormData] = (0, _react.useState)({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Create Employee"), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "firstName"
  }, "First Name", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    value: formData.firstName,
    onChange: handleInputChange
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lastName"
  }, "Last Name", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    value: formData.lastName,
    onChange: handleInputChange
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "dateOfBirth"
  }, "Date of Birth", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: formData.dateOfBirth,
    onChange: date => setFormData({
      ...formData,
      dateOfBirth: date
    })
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "startDate"
  }, "Start Date", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: formData.startDate,
    onChange: date => setFormData({
      ...formData,
      startDate: date
    })
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h2", null, "Address"), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "street"
  }, "Street", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "street",
    name: "street",
    value: formData.street,
    onChange: handleInputChange
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "city"
  }, "City", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    value: formData.city,
    onChange: handleInputChange
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "state"
  }, "State", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("select", {
    id: "state",
    name: "state",
    value: formData.state,
    onChange: handleInputChange
  }, _States.default.map(state => /*#__PURE__*/_react.default.createElement("option", {
    key: state.abbreviation,
    value: state.abbreviation
  }, state.name)))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "zipCode"
  }, "Zip Code", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    id: "zipCode",
    name: "zipCode",
    value: formData.zipCode,
    onChange: handleInputChange
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "department"
  }, "Department", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("select", {
    id: "department",
    name: "department",
    value: formData.department,
    onChange: handleInputChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "Sales"
  }, "Sales"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Engineering"
  }, "Engineering"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Human Resources"
  }, "Human Resources"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Legal"
  }, "Legal"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Save")), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: showModal,
    onClose: handleCloseModal
  }));
}
var _default = exports.default = Form;