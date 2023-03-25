"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 40.1054 27.9414 C 40.1054 27.4492 39.8944 27.0508 39.4257 26.5820 L 31.5039 18.6133 C 31.1992 18.3086 30.7773 18.1445 30.2851 18.1445 C 29.3241 18.1445 28.5976 18.8945 28.5976 19.8320 C 28.5976 20.3477 28.8085 20.7696 29.1132 21.0977 L 32.0429 24.0039 L 34.8788 26.3711 L 29.9335 26.1836 L 17.6992 26.1836 C 16.6913 26.1836 15.9648 26.9102 15.9413 27.9414 C 15.9413 28.9492 16.6913 29.6992 17.6992 29.6992 L 29.9335 29.6992 L 34.8788 29.5118 L 32.0429 31.9023 L 29.1132 34.7852 C 28.7851 35.0898 28.5976 35.5118 28.5976 36.0274 C 28.5976 36.9883 29.3241 37.7383 30.2851 37.7383 C 30.7773 37.7383 31.1992 37.5508 31.5039 37.2461 L 39.4257 29.3242 C 39.8710 28.8789 40.1054 28.4805 40.1054 27.9414 Z"
  }));
}

var _default = ArrowRightSquare;
exports["default"] = _default;