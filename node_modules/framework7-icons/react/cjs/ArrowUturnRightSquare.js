"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnRightSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4648 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4648 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 15.8944 30.9648 C 15.8944 36.6133 19.9960 40.1055 25.4570 40.1055 L 28.6679 40.1055 C 29.7226 40.1055 30.4960 39.5195 30.4960 38.4414 C 30.4960 37.3633 29.7226 36.7539 28.7148 36.7539 L 25.4570 36.7539 C 21.9179 36.7539 19.3398 34.4804 19.3398 30.7773 C 19.3398 27.1680 21.9882 25.1992 25.4335 25.1992 L 32.4413 25.1992 L 35.2070 25.1055 L 33.8476 26.1133 L 30.9179 28.9258 C 30.5663 29.2304 30.4023 29.6992 30.4023 30.1445 C 30.4023 31.1055 31.1288 31.8320 32.0663 31.8320 C 32.5585 31.8320 32.9335 31.6914 33.2617 31.3633 L 39.5195 24.9648 C 39.8944 24.5664 40.1523 24.0977 40.1523 23.5586 C 40.1523 22.9961 39.8944 22.5039 39.5195 22.1055 L 33.2851 15.8008 C 32.9570 15.4492 32.5820 15.2851 32.0898 15.2851 C 31.1288 15.2851 30.4023 16.0117 30.4023 16.9961 C 30.4023 17.4648 30.6132 17.9102 30.9413 18.1914 L 33.3554 20.5351 L 35.2070 22.0117 L 32.4413 21.9180 L 25.4335 21.9180 C 19.9726 21.9180 15.8944 25.3398 15.8944 30.9648 Z"
  }));
}

var _default = ArrowUturnRightSquare;
exports["default"] = _default;