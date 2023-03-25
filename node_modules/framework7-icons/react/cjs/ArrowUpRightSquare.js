"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpRightSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 35.3710 33.7774 C 36.4023 33.7774 37.1054 33.0039 37.1054 31.9023 L 37.1054 20.8633 C 37.1054 19.4571 36.3320 18.9180 35.1366 18.9180 L 24.0273 18.9180 C 22.9257 18.9180 22.2226 19.5977 22.2226 20.6289 C 22.2226 21.6602 22.9492 22.3633 24.0742 22.3633 L 28.3398 22.3633 L 31.8085 21.9883 L 28.1523 25.3867 L 19.5039 34.0118 C 19.1757 34.3398 18.9413 34.8086 18.9413 35.2774 C 18.9413 36.3320 19.6444 37.0118 20.6757 37.0118 C 21.2382 37.0118 21.6835 36.8008 22.0117 36.4727 L 30.6366 27.8477 L 34.0117 24.2383 L 33.6601 27.8945 L 33.6601 31.9492 C 33.6601 33.0742 34.3398 33.7774 35.3710 33.7774 Z"
  }));
}

var _default = ArrowUpRightSquare;
exports["default"] = _default;