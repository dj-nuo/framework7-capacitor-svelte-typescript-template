"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Alt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.2969 49.4805 L 17.5703 49.4805 C 19.6094 49.4805 21.2734 48.3789 22.0703 46.5508 L 37.4453 11.8867 C 37.8203 11.1133 38.4062 10.7617 39.3672 10.7617 L 49.7265 10.7617 C 50.9452 10.7617 51.9297 9.8008 51.9297 8.6289 C 51.9297 7.4571 50.9452 6.5195 49.7265 6.5195 L 38.3125 6.5195 C 36.1328 6.5195 34.7031 7.4336 33.8360 9.4024 L 18.4141 44.0899 C 18.0391 44.8633 17.4297 45.2383 16.5860 45.2383 L 6.2969 45.2383 C 5.0547 45.2383 4.0703 46.1758 4.0703 47.3711 C 4.0703 48.5664 5.0547 49.4805 6.2969 49.4805 Z M 34.5625 49.4805 L 49.7265 49.4805 C 50.9687 49.4805 51.9062 48.5899 51.9062 47.3945 C 51.9062 46.1992 50.9687 45.2852 49.7265 45.2852 L 34.5625 45.2852 C 33.3203 45.2852 32.3594 46.1992 32.3594 47.3945 C 32.3594 48.5899 33.3203 49.4805 34.5625 49.4805 Z"
  }));
}

var _default = Alt;
exports["default"] = _default;