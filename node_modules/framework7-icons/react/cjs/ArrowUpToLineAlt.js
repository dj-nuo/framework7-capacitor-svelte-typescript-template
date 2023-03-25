"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpToLineAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.7773 25.7617 C 45.7773 25.1992 45.5664 24.7070 45.1211 24.2382 L 29.5586 8.6523 C 29.1836 8.2539 28.7149 8.0195 28.2227 7.9492 L 43.7383 7.9492 C 44.9336 7.9492 45.7773 7.0820 45.7773 5.8633 C 45.7773 4.6445 44.9336 3.7539 43.7383 3.7539 L 12.3086 3.7539 C 11.0898 3.7539 10.2227 4.6445 10.2227 5.8633 C 10.2227 7.0820 11.0898 7.9492 12.3086 7.9492 L 27.7773 7.9492 C 27.2851 8.0195 26.8164 8.2539 26.4414 8.6523 L 10.8789 24.2382 C 10.4336 24.7070 10.2227 25.1992 10.2227 25.7617 C 10.2227 26.9102 11.0898 27.8008 12.2383 27.8008 C 12.8008 27.8008 13.3633 27.6133 13.7383 27.2382 L 19.0586 21.9883 L 26.0898 14.3008 L 25.9024 19.2929 L 25.9024 50.1836 C 25.9024 51.4023 26.7695 52.2461 27.9883 52.2461 C 29.2071 52.2461 30.0976 51.4023 30.0976 50.1836 L 30.0976 19.2929 L 29.9102 14.2773 L 36.9180 21.9883 L 42.2617 27.2382 C 42.6367 27.6133 43.1992 27.8008 43.7383 27.8008 C 44.9102 27.8008 45.7773 26.9102 45.7773 25.7617 Z"
  }));
}

var _default = ArrowUpToLineAlt;
exports["default"] = _default;