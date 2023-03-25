"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FlowchartFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.1952 41.7461 L 26.3124 41.7461 L 26.3124 45.3086 L 22.6327 45.3086 C 20.9218 45.3086 20.2655 46.9727 21.3436 48.2852 L 26.7577 54.9180 C 27.4609 55.7852 28.6327 55.7852 29.3593 54.9180 L 34.7265 48.2852 C 35.7343 46.9961 35.1015 45.3086 33.4609 45.3086 L 29.7343 45.3086 L 29.7343 41.7461 L 47.8045 41.7461 C 51.3906 41.7461 53.1954 40.0117 53.1954 36.4024 L 53.1954 28.1758 C 53.1954 24.5899 51.3906 22.8555 47.8045 22.8555 L 29.7343 22.8555 L 29.7343 19.1289 L 47.8045 19.1289 C 51.3906 19.1289 53.1954 17.3711 53.1954 13.7852 L 53.1954 5.5352 C 53.1954 1.9492 51.3906 .2148 47.8045 .2148 L 8.1952 .2148 C 4.6093 .2148 2.8046 1.9492 2.8046 5.5352 L 2.8046 13.7852 C 2.8046 17.3711 4.6093 19.1289 8.1952 19.1289 L 26.3124 19.1289 L 26.3124 22.8555 L 8.1952 22.8555 C 4.6093 22.8555 2.8046 24.5899 2.8046 28.1758 L 2.8046 36.4024 C 2.8046 40.0117 4.6093 41.7461 8.1952 41.7461 Z"
  }));
}

var _default = FlowchartFill;
exports["default"] = _default;