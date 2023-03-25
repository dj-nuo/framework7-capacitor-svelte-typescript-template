"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowClockwise(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.1446 26.1836 C 27.7070 26.1836 28.1524 25.9961 28.5039 25.6445 L 38.1602 15.9414 C 38.5586 15.5430 38.7461 15.0742 38.7461 14.5352 C 38.7461 14.0195 38.5352 13.5039 38.1602 13.1289 L 28.5039 3.3320 C 28.1758 2.9570 27.7070 2.7695 27.1211 2.7695 C 26.0899 2.7695 25.2930 3.6133 25.2930 4.6914 C 25.2930 5.1836 25.4570 5.6523 25.8086 6.0274 L 32.0664 12.1679 C 30.7305 11.9336 29.3477 11.7930 27.9883 11.7930 C 16.5039 11.7930 7.2930 21.0039 7.2930 32.4883 C 7.2930 43.9961 16.5039 53.2305 27.9883 53.2305 C 39.4726 53.2305 48.7070 43.9961 48.7070 32.4883 C 48.7070 31.3633 47.9102 30.5430 46.7383 30.5430 C 45.6367 30.5430 44.9336 31.3633 44.9336 32.4883 C 44.9336 41.9101 37.3867 49.4570 27.9883 49.4570 C 18.5899 49.4570 11.0664 41.9101 11.0664 32.4883 C 11.0664 23.0898 18.5899 15.5664 27.9883 15.5664 C 29.7930 15.5664 31.4102 15.7070 32.8399 16.0117 L 25.8320 22.9726 C 25.4570 23.3477 25.2930 23.8164 25.2930 24.3086 C 25.2930 25.3867 26.0899 26.1836 27.1446 26.1836 Z"
  }));
}

var _default = ArrowClockwise;
exports["default"] = _default;