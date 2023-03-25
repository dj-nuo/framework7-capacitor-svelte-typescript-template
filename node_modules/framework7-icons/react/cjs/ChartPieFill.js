"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartPieFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 29.0899 25.9375 L 47.5118 15.3672 C 43.5742 9.2266 36.8008 5.0547 29.0899 4.7031 Z M 27.9883 51.2969 C 33.6836 51.2969 38.9102 49.2110 42.9883 45.7891 L 26.5118 29.6641 C 26.0664 29.2422 25.9492 28.8438 25.9492 28.2109 L 25.9492 4.7734 C 14.1133 5.8047 4.7383 15.8360 4.7383 27.9766 C 4.7383 40.7969 15.2149 51.2969 27.9883 51.2969 Z M 45.3086 43.5156 C 48.9884 39.3907 51.2617 33.9297 51.2617 27.9766 C 51.2617 24.4609 50.4649 21.1094 49.0585 18.0860 L 30.4258 28.8203 Z"
  }));
}

var _default = ChartPieFill;
exports["default"] = _default;