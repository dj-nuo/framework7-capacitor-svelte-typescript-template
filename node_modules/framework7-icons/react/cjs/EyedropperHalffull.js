"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EyedropperHalffull(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.6485 28.9024 L 40.3048 28.1758 C 41.4532 26.9805 41.5001 25.5742 40.2813 24.3555 L 39.5782 23.6758 C 43.1641 20.4649 47.1485 20.0195 49.6095 17.5117 C 53.1015 13.9961 51.9533 9.0742 49.5159 6.6133 C 47.0780 4.1289 42.2032 3.0742 38.6172 6.5195 C 36.0860 8.9571 35.6641 12.9649 32.4532 16.5508 L 31.7735 15.8476 C 30.5548 14.6289 29.1485 14.6758 27.9532 15.8242 L 27.2266 16.4805 C 25.7969 17.8633 26.0548 19.0820 27.2969 20.3242 L 28.2813 21.3086 L 10.5860 39.0274 C 3.3438 46.2695 6.8360 45.1445 2.8985 50.6992 L 4.9845 52.9258 C 10.3750 49.0117 9.6485 52.8555 16.9845 45.5195 L 34.7969 27.8242 L 35.8048 28.8320 C 37.0469 30.0742 38.2657 30.3320 39.6485 28.9024 Z M 21.1094 35.1133 C 20.2423 34.1758 20.4532 33.3086 21.3438 32.3711 L 30.2969 23.3242 L 32.8516 25.8789 L 23.8048 34.9024 C 22.9845 35.7227 21.9063 35.9805 21.1094 35.1133 Z"
  }));
}

var _default = EyedropperHalffull;
exports["default"] = _default;