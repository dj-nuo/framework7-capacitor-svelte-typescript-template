"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Menu(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M3,20 C4.65685425,20 6,21.3431458 6,23 C6,24.6568542 4.65685425,26 3,26 C1.34314575,26 0,24.6568542 0,23 C0,21.3431458 1.34314575,20 3,20 Z M38.9982567,21 C40.103789,21 41,21.8877296 41,23 C41,24.1045695 40.1107383,25 38.9982567,25 L11.0017433,25 C9.89621101,25 9,24.1122704 9,23 C9,21.8954305 9.88926172,21 11.0017433,21 L38.9982567,21 Z M3,10 C4.65685425,10 6,11.3431458 6,13 C6,14.6568542 4.65685425,16 3,16 C1.34314575,16 0,14.6568542 0,13 C0,11.3431458 1.34314575,10 3,10 Z M38.9982567,11 C40.103789,11 41,11.8877296 41,13 C41,14.1045695 40.1107383,15 38.9982567,15 L11.0017433,15 C9.89621101,15 9,14.1122704 9,13 C9,11.8954305 9.88926172,11 11.0017433,11 L38.9982567,11 Z M3,0 C4.65685425,0 6,1.34314575 6,3 C6,4.65685425 4.65685425,6 3,6 C1.34314575,6 0,4.65685425 0,3 C0,1.34314575 1.34314575,0 3,0 Z M38.9982567,1 C40.103789,1 41,1.88772964 41,3 C41,4.1045695 40.1107383,5 38.9982567,5 L11.0017433,5 C9.89621101,5 9,4.11227036 9,3 C9,1.8954305 9.88926172,1 11.0017433,1 L38.9982567,1 Z",
    transform: "translate(7 16)"
  }));
}

var _default = Menu;
exports["default"] = _default;