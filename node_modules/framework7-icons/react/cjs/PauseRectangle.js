"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PauseRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z M 22.0585 36.7539 L 23.4179 36.7539 C 24.6835 36.7539 25.4570 35.7930 25.4570 34.5508 L 25.4570 21.4492 C 25.4570 20.1836 24.6835 19.2227 23.4179 19.2227 L 22.0585 19.2227 C 20.6757 19.2227 19.9023 20.1836 19.9023 21.4492 L 19.9023 34.5508 C 19.9023 35.7930 20.6757 36.7539 22.0585 36.7539 Z M 32.6992 36.7539 L 34.0585 36.7539 C 35.3241 36.7539 36.0976 35.7930 36.0976 34.5508 L 36.0976 21.4492 C 36.0976 20.1836 35.3241 19.2227 34.0585 19.2227 L 32.6992 19.2227 C 31.3163 19.2227 30.5429 20.1836 30.5429 21.4492 L 30.5429 34.5508 C 30.5429 35.7930 31.3163 36.7539 32.6992 36.7539 Z"
  }));
}

var _default = PauseRectangle;
exports["default"] = _default;