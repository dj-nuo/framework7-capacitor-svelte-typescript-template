"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareFillOnCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.9687 37.9492 L 11.9687 22.4570 C 11.9687 15.8242 15.8124 12.0273 22.4921 12.0273 L 37.6327 12.0273 C 34.4687 5.7227 27.9062 1.3398 20.4062 1.3398 C 9.8124 1.3398 1.0937 10.0586 1.0937 20.6524 C 1.0937 28.1992 5.5468 34.8086 11.9687 37.9492 Z M 22.5155 54.6602 L 47.5700 54.6602 C 52.4454 54.6602 54.9063 52.2227 54.9063 47.3945 L 54.9063 22.4805 C 54.9063 17.6758 52.4454 15.2383 47.5700 15.2383 L 22.5155 15.2383 C 17.6171 15.2383 15.1796 17.6524 15.1796 22.4805 L 15.1796 47.3945 C 15.1796 52.2227 17.6171 54.6602 22.5155 54.6602 Z"
  }));
}

var _default = SquareFillOnCircleFill;
exports["default"] = _default;