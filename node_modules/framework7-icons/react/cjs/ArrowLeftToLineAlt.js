"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowLeftToLineAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.8632 45.7656 C 7.0819 45.7656 7.9491 44.9453 7.9491 43.7500 L 7.9491 28.2344 C 8.0194 28.7266 8.2538 29.1953 8.6522 29.5703 L 24.2382 45.1328 C 24.7069 45.5781 25.1991 45.7656 25.7616 45.7656 C 26.9101 45.7656 27.8007 44.9219 27.8007 43.7500 C 27.8007 43.2109 27.6132 42.6484 27.2382 42.2734 L 21.9882 36.9297 L 14.2772 29.9219 L 19.2928 30.1094 L 50.1836 30.1094 C 51.4024 30.1094 52.2462 29.2187 52.2462 28.0000 C 52.2462 26.7813 51.4024 25.9141 50.1836 25.9141 L 19.2928 25.9141 L 14.3007 26.1016 L 21.9882 19.0703 L 27.2382 13.7500 C 27.6132 13.3750 27.8007 12.8125 27.8007 12.2500 C 27.8007 11.1016 26.9101 10.2344 25.7616 10.2344 C 25.1991 10.2344 24.7069 10.4453 24.2382 10.8906 L 8.6522 26.4297 C 8.2538 26.8282 8.0194 27.2969 7.9491 27.7891 L 7.9491 12.3203 C 7.9491 11.1016 7.0819 10.2344 5.8632 10.2344 C 4.6444 10.2344 3.7538 11.1016 3.7538 12.3203 L 3.7538 43.7500 C 3.7538 44.9453 4.6444 45.7656 5.8632 45.7656 Z"
  }));
}

var _default = ArrowLeftToLineAlt;
exports["default"] = _default;