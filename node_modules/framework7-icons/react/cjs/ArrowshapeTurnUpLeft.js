"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 25.6563 49.5039 C 27.2266 49.5039 28.3985 48.3320 28.3985 46.7617 L 28.3985 37.8086 L 29.0782 37.8086 C 38.1485 37.8086 43.8907 40.1055 47.9687 47.7695 C 48.7891 49.2695 49.8671 49.5039 50.8516 49.5039 C 52.1174 49.5039 53.2655 48.3789 53.2655 46.3633 C 53.2655 29.0429 45.9298 18.2383 29.0782 18.2383 L 28.3985 18.2383 L 28.3985 9.3789 C 28.3985 7.8086 27.2266 6.4961 25.6095 6.4961 C 24.4376 6.4961 23.7344 7.0820 22.4220 8.1836 L 3.9298 25.4805 C 3.0626 26.3477 2.7345 27.2148 2.7345 28.0117 C 2.7345 28.7851 3.0626 29.6524 3.9298 30.5195 L 22.4220 47.9805 C 23.5939 48.9883 24.4844 49.5039 25.6563 49.5039 Z M 24.2970 44.4648 C 24.1563 44.4648 24.0392 44.3945 23.8985 44.2539 L 7.2110 28.4570 C 7.0001 28.2695 6.9532 28.1524 6.9532 28.0117 C 6.9532 27.8711 7.0235 27.7305 7.2110 27.5664 L 23.8985 11.5586 C 23.9923 11.4648 24.1329 11.3711 24.2970 11.3711 C 24.4844 11.3711 24.6251 11.5117 24.6251 11.6992 L 24.6251 21.0039 C 24.6251 21.5429 24.8595 21.7773 25.3985 21.7773 L 28.5626 21.7773 C 44.6407 21.7773 49.4687 32.9336 49.9377 43.9961 C 49.9377 44.1602 49.8671 44.2539 49.7735 44.2539 C 49.6564 44.2539 49.6094 44.1836 49.5393 44.0195 C 46.8671 38.0898 39.6720 34.2695 28.5626 34.2695 L 25.3985 34.2695 C 24.8595 34.2695 24.6251 34.5039 24.6251 35.0429 L 24.6251 44.1133 C 24.6251 44.3242 24.4844 44.4648 24.2970 44.4648 Z"
  }));
}

var _default = ArrowshapeTurnUpLeft;
exports["default"] = _default;