"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Power(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 28.7617 C 29.1249 28.7617 29.8749 27.9414 29.8749 26.7695 L 29.8749 5.7227 C 29.8749 4.5273 29.1249 3.7305 27.9999 3.7305 C 26.8749 3.7305 26.1014 4.5273 26.1014 5.7227 L 26.1014 26.7695 C 26.1014 27.9414 26.8749 28.7617 27.9999 28.7617 Z M 27.9999 52.2695 C 40.7265 52.2695 51.2970 41.7227 51.2970 28.9961 C 51.2970 22.0820 48.1796 15.8008 43.2811 11.5351 C 41.3358 9.8008 38.5467 12.5430 40.7733 14.4883 C 44.7811 17.9805 47.2889 23.2070 47.2889 28.9961 C 47.2889 39.7070 38.6874 48.3086 27.9999 48.3086 C 17.2889 48.3086 8.6874 39.7070 8.6874 28.9961 C 8.6874 23.2070 11.2187 18.0039 15.2265 14.4883 C 17.4296 12.5430 14.6405 9.8008 12.7187 11.5351 C 7.8202 15.8008 4.7030 22.0820 4.7030 28.9961 C 4.7030 41.7227 15.2733 52.2695 27.9999 52.2695 Z"
  }));
}

var _default = Power;
exports["default"] = _default;