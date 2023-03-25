"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareListFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M35.8125,1.77635684e-14 C40.7109,1.77635684e-14 43.1486,2.4375 43.1486,7.2656 L43.1486,7.2656 L43.1486,35.8828 C43.1486,40.7109 40.7109,43.1484 35.8125,43.1484 L35.8125,43.1484 L7.3594,43.1484 C2.4844,43.1484 -7.10542736e-15,40.7344 -7.10542736e-15,35.8828 L-7.10542736e-15,35.8828 L-7.10542736e-15,7.2656 C-7.10542736e-15,2.414 2.4844,1.77635684e-14 7.3594,1.77635684e-14 L7.3594,1.77635684e-14 Z M9.5743,29.5742 C8.4697305,29.5742 7.5743,30.4696305 7.5743,31.5742 C7.5743,32.6787695 8.4697305,33.5742 9.5743,33.5742 C10.6788695,33.5742 11.5743,32.6787695 11.5743,31.5742 C11.5743,30.4696305 10.6788695,29.5742 9.5743,29.5742 Z M34.7561182,29.5742 L18.3924818,29.5742 C17.3883277,29.5742 16.5743,30.4696305 16.5743,31.5742 C16.5743,32.6787695 17.3883277,33.5742 18.3924818,33.5742 L34.7561182,33.5742 C35.7602723,33.5742 36.5743,32.6787695 36.5743,31.5742 C36.5743,30.4696305 35.7602723,29.5742 34.7561182,29.5742 Z M9.5743,19.5742 C8.4697305,19.5742 7.5743,20.4696305 7.5743,21.5742 C7.5743,22.6787695 8.4697305,23.5742 9.5743,23.5742 C10.6788695,23.5742 11.5743,22.6787695 11.5743,21.5742 C11.5743,20.4696305 10.6788695,19.5742 9.5743,19.5742 Z M34.7561182,19.5742 L18.3924818,19.5742 C17.3883277,19.5742 16.5743,20.4696305 16.5743,21.5742 C16.5743,22.6787695 17.3883277,23.5742 18.3924818,23.5742 L34.7561182,23.5742 C35.7602723,23.5742 36.5743,22.6787695 36.5743,21.5742 C36.5743,20.4696305 35.7602723,19.5742 34.7561182,19.5742 Z M9.5743,9.5742 C8.4697305,9.5742 7.5743,10.4696305 7.5743,11.5742 C7.5743,12.6787695 8.4697305,13.5742 9.5743,13.5742 C10.6788695,13.5742 11.5743,12.6787695 11.5743,11.5742 C11.5743,10.4696305 10.6788695,9.5742 9.5743,9.5742 Z M34.7561182,9.5742 L18.3924818,9.5742 C17.3883277,9.5742 16.5743,10.4696305 16.5743,11.5742 C16.5743,12.6787695 17.3883277,13.5742 18.3924818,13.5742 L34.7561182,13.5742 C35.7602723,13.5742 36.5743,12.6787695 36.5743,11.5742 C36.5743,10.4696305 35.7602723,9.5742 34.7561182,9.5742 Z",
    transform: "translate(6.426 6.426)"
  }));
}

var _default = SquareListFill;
exports["default"] = _default;