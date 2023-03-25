"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function XmarkRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 19.6913 38.3945 C 18.5898 38.3945 17.6757 37.4571 17.6757 36.3789 C 17.6757 35.8867 17.9101 35.3711 18.2851 35.0196 L 25.2226 28.0820 L 18.2851 21.1211 C 17.9335 20.7696 17.6757 20.2774 17.6757 19.7852 C 17.6757 18.6836 18.5898 17.8164 19.6913 17.8164 C 20.1835 17.8164 20.6523 18.0274 21.0273 18.4023 L 27.9648 25.3398 L 34.9960 18.3789 C 35.3944 17.9571 35.8398 17.7696 36.3085 17.7696 C 37.4101 17.7696 38.3241 18.6602 38.3241 19.7617 C 38.3241 20.2539 38.1132 20.6992 37.6913 21.0977 L 30.7538 28.0820 L 37.6679 34.9727 C 38.0663 35.3242 38.3007 35.8633 38.3007 36.3789 C 38.3007 37.4571 37.3866 38.3945 36.2851 38.3945 C 35.7695 38.3945 35.2538 38.1133 34.9257 37.7617 L 27.9648 30.8242 L 21.0507 37.7617 C 20.6992 38.1367 20.1835 38.3945 19.6913 38.3945 Z"
  }));
}

var _default = XmarkRectangleFill;
exports["default"] = _default;