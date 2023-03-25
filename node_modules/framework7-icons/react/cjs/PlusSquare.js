"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 27.9882 39.0742 C 29.2304 39.0742 29.9804 38.2071 29.9804 36.8477 L 29.9804 29.9336 L 37.3163 29.9336 C 38.6288 29.9336 39.5429 29.2305 39.5429 27.9883 C 39.5429 26.7227 38.6757 25.9961 37.3163 25.9961 L 29.9804 25.9961 L 29.9804 18.6367 C 29.9804 17.2774 29.2304 16.4102 27.9882 16.4102 C 26.7460 16.4102 26.0429 17.3242 26.0429 18.6367 L 26.0429 25.9961 L 18.7304 25.9961 C 17.3710 25.9961 16.4804 26.7227 16.4804 27.9883 C 16.4804 29.2305 17.4179 29.9336 18.7304 29.9336 L 26.0429 29.9336 L 26.0429 36.8477 C 26.0429 38.1602 26.7460 39.0742 27.9882 39.0742 Z"
  }));
}

var _default = PlusSquare;
exports["default"] = _default;