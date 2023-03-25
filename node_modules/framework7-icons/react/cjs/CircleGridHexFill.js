"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CircleGridHexFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 19.3985 19.5977 C 23.2189 19.5977 26.4063 16.4102 26.4063 12.6133 C 26.4063 8.7930 23.2189 5.6055 19.3985 5.6055 C 15.5783 5.6055 12.3907 8.7930 12.3907 12.6133 C 12.3907 16.3867 15.5548 19.5977 19.3985 19.5977 Z M 36.5783 19.5977 C 40.4220 19.5977 43.5861 16.4102 43.5861 12.6133 C 43.5861 8.7930 40.4220 5.6055 36.5783 5.6055 C 32.7579 5.6055 29.5939 8.7930 29.5939 12.6133 C 29.5939 16.4102 32.7579 19.5977 36.5783 19.5977 Z M 28.0001 35.0195 C 31.8204 35.0195 35.0079 31.8320 35.0079 28.0117 C 35.0079 24.1914 31.8204 21.0039 28.0001 21.0039 C 24.1798 21.0039 20.9923 24.1914 20.9923 28.0117 C 20.9923 31.8320 24.1798 35.0195 28.0001 35.0195 Z M 10.7970 35.0195 C 14.6407 35.0195 17.8048 31.8320 17.8048 28.0117 C 17.8048 24.1914 14.6407 21.0039 10.7970 21.0039 C 6.9767 21.0039 3.8126 24.1914 3.8126 28.0117 C 3.8126 31.8086 6.9532 35.0195 10.7970 35.0195 Z M 45.1798 35.0195 C 49.0002 35.0195 52.1874 31.8320 52.1874 28.0117 C 52.1874 24.1914 49.0002 21.0039 45.1798 21.0039 C 41.3595 21.0039 38.1720 24.1914 38.1720 28.0117 C 38.1720 31.8320 41.3595 35.0195 45.1798 35.0195 Z M 19.3985 50.3945 C 23.2189 50.3945 26.4063 47.2305 26.4063 43.3867 C 26.4063 39.5898 23.2189 36.4258 19.3985 36.4258 C 15.5783 36.4258 12.3907 39.5898 12.3907 43.3867 C 12.3907 47.1836 15.5548 50.3945 19.3985 50.3945 Z M 36.5783 50.3945 C 40.4220 50.3945 43.5861 47.2305 43.5861 43.3867 C 43.5861 39.5898 40.4220 36.4258 36.5783 36.4258 C 32.7579 36.4258 29.5939 39.5898 29.5939 43.3867 C 29.5939 47.2305 32.7579 50.3945 36.5783 50.3945 Z"
  }));
}

var _default = CircleGridHexFill;
exports["default"] = _default;