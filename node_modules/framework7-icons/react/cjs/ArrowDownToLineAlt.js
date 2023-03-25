"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownToLineAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.7773 50.1367 C 45.7773 48.9180 44.9336 48.0508 43.7383 48.0508 L 28.2227 48.0508 C 28.7149 48.0039 29.1836 47.7461 29.5586 47.3476 L 45.1211 31.7617 C 45.5664 31.2929 45.7773 30.8008 45.7773 30.2382 C 45.7773 29.0898 44.9102 28.1992 43.7383 28.1992 C 43.1992 28.1992 42.6367 28.3867 42.2617 28.7617 L 36.9180 34.0117 L 29.9102 41.7226 L 30.0976 36.7070 L 30.0976 5.8164 C 30.0976 4.6211 29.2071 3.7539 27.9883 3.7539 C 26.7695 3.7539 25.9024 4.6211 25.9024 5.8164 L 25.9024 36.7070 L 26.0898 41.6992 L 19.0586 34.0117 L 13.7383 28.7617 C 13.3633 28.3867 12.8008 28.1992 12.2383 28.1992 C 11.0898 28.1992 10.2227 29.0898 10.2227 30.2382 C 10.2227 30.8008 10.4336 31.2929 10.8789 31.7617 L 26.4414 47.3476 C 26.8164 47.7461 27.2851 48.0039 27.7773 48.0508 L 12.3086 48.0508 C 11.0898 48.0508 10.2227 48.9180 10.2227 50.1367 C 10.2227 51.3555 11.0898 52.2461 12.3086 52.2461 L 43.7383 52.2461 C 44.9336 52.2461 45.7773 51.3555 45.7773 50.1367 Z"
  }));
}

var _default = ArrowDownToLineAlt;
exports["default"] = _default;