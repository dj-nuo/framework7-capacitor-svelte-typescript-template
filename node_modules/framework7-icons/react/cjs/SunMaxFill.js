"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SunMaxFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 30.0391 4.6094 C 30.0391 3.5078 29.1016 2.5703 28.0001 2.5703 C 26.8985 2.5703 25.9610 3.5078 25.9610 4.6094 L 25.9610 9.5312 C 25.9610 10.6328 26.8985 11.5703 28.0001 11.5703 C 29.1016 11.5703 30.0391 10.6328 30.0391 9.5312 Z M 39.5782 13.5390 C 38.8047 14.3359 38.8047 15.6484 39.5782 16.4219 C 40.3751 17.2187 41.6642 17.2422 42.4844 16.4219 L 45.9766 12.9297 C 46.7737 12.1328 46.7737 10.8203 45.9766 10.0234 C 45.2032 9.25 43.8907 9.25 43.0938 10.0234 Z M 13.5157 16.4219 C 14.2891 17.2187 15.6016 17.2187 16.3985 16.4219 C 17.1720 15.6719 17.1720 14.3125 16.4220 13.5390 L 12.9298 10.0234 C 12.1798 9.2734 10.8438 9.25 10.0469 10.0234 C 9.2735 10.7968 9.2735 12.1328 10.0235 12.9063 Z M 28.0001 16.0468 C 21.4610 16.0468 16.0469 21.4609 16.0469 28.0000 C 16.0469 34.5390 21.4610 39.9766 28.0001 39.9766 C 34.5157 39.9766 39.9298 34.5390 39.9298 28.0000 C 39.9298 21.4609 34.5157 16.0468 28.0001 16.0468 Z M 51.3203 30.0390 C 52.4219 30.0390 53.3593 29.1016 53.3593 28.0000 C 53.3593 26.8984 52.4219 25.9609 51.3203 25.9609 L 46.4220 25.9609 C 45.3204 25.9609 44.3829 26.8984 44.3829 28.0000 C 44.3829 29.1016 45.3204 30.0390 46.4220 30.0390 Z M 4.6798 25.9609 C 3.5782 25.9609 2.6407 26.8984 2.6407 28.0000 C 2.6407 29.1016 3.5782 30.0390 4.6798 30.0390 L 9.5782 30.0390 C 10.6798 30.0390 11.6173 29.1016 11.6173 28.0000 C 11.6173 26.8984 10.6798 25.9609 9.5782 25.9609 Z M 42.4610 39.6016 C 41.6642 38.8281 40.3751 38.8281 39.5782 39.6016 C 38.8047 40.3750 38.8047 41.6875 39.5782 42.4844 L 43.0938 46.0000 C 43.8907 46.7734 45.2032 46.7500 45.9766 45.9766 C 46.7737 45.2031 46.7737 43.8906 45.9766 43.0937 Z M 10.0235 43.0703 C 9.2266 43.8437 9.2266 45.1797 10.0001 45.9531 C 10.7735 46.7266 12.1094 46.7500 12.9063 45.9766 L 16.3985 42.4844 C 17.1720 41.7109 17.1720 40.3984 16.4220 39.6016 C 15.6485 38.8281 14.3126 38.8281 13.5157 39.6016 Z M 30.0391 46.4687 C 30.0391 45.3672 29.1016 44.4297 28.0001 44.4297 C 26.8985 44.4297 25.9610 45.3672 25.9610 46.4687 L 25.9610 51.3906 C 25.9610 52.4922 26.8985 53.4297 28.0001 53.4297 C 29.1016 53.4297 30.0391 52.4922 30.0391 51.3906 Z"
  }));
}

var _default = SunMaxFill;
exports["default"] = _default;