"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ShiftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.7696 49.7500 L 35.2305 49.7500 C 38.5118 49.7500 40.2696 47.8281 40.2696 44.7344 L 40.2696 34.2344 L 49.8086 34.2344 C 51.7070 34.2344 53.2070 33.0625 53.2070 31.2813 C 53.2070 30.1797 52.6679 29.3594 51.8011 28.5156 L 30.8946 7.6797 C 30.0040 6.7656 29.0430 6.2500 28.0118 6.2500 C 26.9571 6.2500 26.0196 6.7656 25.1055 7.6797 L 4.1993 28.5156 C 3.3087 29.4063 2.7930 30.1797 2.7930 31.2813 C 2.7930 33.0625 4.2930 34.2344 6.2149 34.2344 L 15.7305 34.2344 L 15.7305 44.7344 C 15.7305 47.8281 17.4884 49.7500 20.7696 49.7500 Z"
  }));
}

var _default = ShiftFill;
exports["default"] = _default;