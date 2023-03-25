"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Lessthan(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 42.1680 43.5625 C 43.3164 43.5625 44.1602 42.7422 44.1602 41.4531 C 44.1602 40.3750 43.5976 39.7656 42.6133 39.2969 L 17.3711 28.0703 L 17.3711 27.8125 L 42.6133 16.6797 C 43.5976 16.2110 44.1602 15.6016 44.1602 14.5235 C 44.1602 13.2813 43.2929 12.4375 42.0742 12.4375 C 41.4648 12.4375 41.0429 12.6016 40.5742 12.8359 L 14.2304 24.9532 C 12.8711 25.5625 11.8398 26.6406 11.8398 28.1172 C 11.8398 29.6172 12.8945 30.6484 14.2304 31.2813 L 40.5742 43.1172 C 41.0664 43.3516 41.5117 43.5625 42.1680 43.5625 Z"
  }));
}

var _default = Lessthan;
exports["default"] = _default;