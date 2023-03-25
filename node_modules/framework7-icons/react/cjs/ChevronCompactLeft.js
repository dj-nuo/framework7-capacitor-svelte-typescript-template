"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronCompactLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 29.3945 47.3945 C 29.7461 48.3086 30.5429 48.8945 31.4102 48.8945 C 32.7929 48.8945 33.8242 47.8867 33.8242 46.5039 C 33.8242 45.8008 33.4258 44.8867 33.2148 44.2773 L 26.7929 27.9883 L 33.2148 11.6992 C 33.4258 11.0898 33.8242 10.1523 33.8242 9.4726 C 33.8242 8.1133 32.7929 7.1055 31.4102 7.1055 C 30.5429 7.1055 29.7461 7.6679 29.3945 8.5820 L 23.1133 24.5664 C 22.6914 25.6445 22.1758 26.9570 22.1758 27.9883 C 22.1758 29.0195 22.6914 30.3320 23.1133 31.4101 Z"
  }));
}

var _default = ChevronCompactLeft;
exports["default"] = _default;