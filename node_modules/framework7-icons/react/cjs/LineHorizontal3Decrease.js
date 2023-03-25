"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LineHorizontal3Decrease(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.1797 17.8164 L 49.8203 17.8164 C 50.8748 17.8164 51.7187 16.9961 51.7187 15.9414 C 51.7187 14.8867 50.8748 14.0430 49.8203 14.0430 L 6.1797 14.0430 C 5.1251 14.0430 4.2813 14.8867 4.2813 15.9414 C 4.2813 16.9961 5.1251 17.8164 6.1797 17.8164 Z M 11.1016 29.8867 L 45.0157 29.8867 C 46.0704 29.8867 46.8908 29.0664 46.8908 28.0117 C 46.8908 26.9570 46.0704 26.1133 45.0157 26.1133 L 11.1016 26.1133 C 10.0469 26.1133 9.2266 26.9570 9.2266 28.0117 C 9.2266 29.0664 10.0469 29.8867 11.1016 29.8867 Z M 15.9063 41.9570 L 40.2110 41.9570 C 41.2657 41.9570 42.0860 41.1367 42.0860 40.0820 C 42.0860 39.0273 41.2657 38.1836 40.2110 38.1836 L 15.9063 38.1836 C 14.8516 38.1836 14.0313 39.0273 14.0313 40.0820 C 14.0313 41.1367 14.8516 41.9570 15.9063 41.9570 Z"
  }));
}

var _default = LineHorizontal3Decrease;
exports["default"] = _default;