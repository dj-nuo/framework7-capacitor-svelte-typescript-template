"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RotateLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 37.3280 14.5587 C 38.7343 15.6134 40.1874 15.1915 40.1874 13.3399 L 40.1874 10.1290 L 40.2578 10.1290 C 45.3437 10.1290 48.5545 13.6446 48.5545 18.6603 C 48.5545 21.7774 47.5936 22.9493 47.5235 23.7930 C 47.5000 24.4493 47.7342 24.8477 48.2732 25.1056 C 49.0000 25.4571 49.8438 25.1290 50.2422 24.4493 C 50.9689 23.2071 51.4844 21.1446 51.4844 18.6368 C 51.4844 11.9337 47.0080 7.4103 40.2812 7.4103 L 40.1874 7.4103 L 40.1874 3.9649 C 40.1874 2.0665 38.7578 1.6444 37.3280 2.7227 L 30.9296 7.4103 C 29.8515 8.2071 29.8515 9.1212 30.9296 9.8946 Z M 10.5390 54.3556 L 33.7656 54.3556 C 37.7734 54.3556 39.7890 52.4337 39.7890 48.3321 L 39.7890 25.1524 C 39.7890 21.0508 37.7734 19.1290 33.7656 19.1290 L 10.5390 19.1290 C 6.5312 19.1290 4.5156 21.0508 4.5156 25.1524 L 4.5156 48.3321 C 4.5156 52.4337 6.5312 54.3556 10.5390 54.3556 Z M 10.6093 50.5821 C 9.0156 50.5821 8.2890 49.9259 8.2890 48.2618 L 8.2890 25.2227 C 8.2890 23.5587 9.0156 22.9024 10.6093 22.9024 L 33.6952 22.9024 C 35.3124 22.9024 36.0156 23.5587 36.0156 25.2227 L 36.0156 48.2618 C 36.0156 49.9259 35.3124 50.5821 33.6952 50.5821 Z"
  }));
}

var _default = RotateLeft;
exports["default"] = _default;