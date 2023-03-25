"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Moon(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.2423 36.1211 C 28.3048 36.1211 20.2892 28.3399 20.2892 15.8477 C 20.2892 12.2852 20.8985 9.1445 21.7657 7.4570 C 22.1173 6.7774 22.1642 6.4492 22.1642 5.9805 C 22.1642 5.2070 21.4610 4.2930 20.4767 4.2930 C 20.2892 4.2930 19.8438 4.3633 19.1642 4.6211 C 10.5157 8.1367 4.4220 17.2774 4.4220 27.1211 C 4.4220 41.3477 14.7345 51.7070 28.9610 51.7070 C 39.1798 51.7070 47.4298 46.3633 51.2502 37.5977 C 51.5079 36.9883 51.5780 36.4726 51.5780 36.2148 C 51.5780 35.2539 50.7347 34.5977 50.0315 34.5977 C 49.6331 34.5977 49.3753 34.6211 48.8127 34.8320 C 46.8907 35.6055 44.0314 36.1211 41.2423 36.1211 Z M 8.1016 26.9570 C 8.1016 19.6680 11.8751 12.7305 17.9689 8.9101 C 17.2189 11.0899 16.7970 13.5039 16.7970 16.1758 C 16.7970 30.8242 25.7267 39.5430 40.7032 39.5430 C 43.0938 39.5430 45.1563 39.2617 47.0782 38.5821 C 43.5157 44.4648 36.6485 48.0508 29.1251 48.0508 C 16.9610 48.0508 8.1016 39.1914 8.1016 26.9570 Z"
  }));
}

var _default = Moon;
exports["default"] = _default;