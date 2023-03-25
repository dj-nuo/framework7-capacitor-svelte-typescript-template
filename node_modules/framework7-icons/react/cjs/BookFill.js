"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BookFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 17.0897 44.8984 C 20.9804 44.8984 23.5819 46.3516 24.7304 47.1719 C 25.1523 47.4062 26.3476 48.1094 26.6054 48.1328 L 26.6054 12.6953 C 25.0819 9.8594 20.6054 7.5625 15.9648 7.5625 C 10.1054 7.5625 5.1366 10.9375 4.0351 13.2110 L 4.0351 46.3047 C 4.0351 47.8516 4.9492 48.4375 6.0507 48.4375 C 6.9413 48.4375 7.5273 48.1328 8.0897 47.6641 C 9.4726 46.4219 12.7304 44.8984 17.0897 44.8984 Z M 38.9335 44.8984 C 43.2929 44.8984 46.5275 46.4219 47.9334 47.6641 C 48.4724 48.1094 49.0585 48.4375 49.9489 48.4375 C 51.0505 48.4375 51.9649 47.8516 51.9649 46.3047 L 51.9649 13.2110 C 50.8633 10.9375 45.9179 7.5625 40.0585 7.5625 C 35.4179 7.5625 30.9413 9.8594 29.4179 12.6953 L 29.4179 48.1797 C 29.6757 48.1562 30.8710 47.4297 31.3163 47.1719 C 32.4413 46.3516 35.0429 44.8984 38.9335 44.8984 Z"
  }));
}

var _default = BookFill;
exports["default"] = _default;