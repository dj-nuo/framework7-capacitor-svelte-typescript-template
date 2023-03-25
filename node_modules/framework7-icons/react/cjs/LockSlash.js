"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.6485 2.6758 C 22.1173 2.6758 17.2423 6.0273 15.7657 12.4961 L 18.9532 15.6836 C 19.3282 9.5664 22.9141 6.2852 27.6485 6.2852 C 32.5001 6.2852 36.4141 9.8711 36.4141 16.4102 L 36.4141 22.1524 L 25.4454 22.1524 L 28.9610 25.6914 L 38.8751 25.6914 C 39.9532 25.6914 40.4688 26.1602 40.4688 27.4492 L 40.4688 37.1992 L 44.2423 40.9727 L 44.2423 27.7071 C 44.2423 24.3789 42.9063 22.6211 40.1876 22.2461 L 40.1876 16.9258 C 40.1876 7.3398 34.1876 2.6758 27.6485 2.6758 Z M 46.8204 52.6211 C 47.5235 53.3242 48.6719 53.3242 49.3748 52.6211 C 50.0780 51.9180 50.0780 50.7695 49.3748 50.0664 L 9.1797 9.8945 C 8.4766 9.1914 7.3048 9.1914 6.6017 9.8945 C 5.9220 10.5742 5.9220 11.7695 6.6017 12.4492 Z M 16.3282 50.4883 L 40.8438 50.4883 L 37.3048 46.9727 L 16.4688 46.9727 C 15.3907 46.9727 14.8517 46.3867 14.8517 45.1680 L 14.8517 27.4492 C 14.8517 26.3476 15.2501 25.8320 16.0704 25.7149 L 13.2344 22.8789 C 11.8048 23.6992 11.0782 25.2930 11.0782 27.7071 L 11.0782 44.9336 C 11.0782 48.7539 12.8126 50.4883 16.3282 50.4883 Z"
  }));
}

var _default = LockSlash;
exports["default"] = _default;