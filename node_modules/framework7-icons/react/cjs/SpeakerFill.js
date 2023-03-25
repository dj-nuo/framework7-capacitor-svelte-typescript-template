"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SpeakerFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.7305 49.5039 C 41.3242 49.5039 42.4726 48.3320 42.4726 46.7617 L 42.4726 9.3789 C 42.4726 7.8086 41.3242 6.4961 39.6836 6.4961 C 38.5352 6.4961 37.7617 7.0117 36.5195 8.1836 L 26.1836 17.9570 C 26.0195 18.0977 25.8086 18.1680 25.5742 18.1680 L 18.6133 18.1680 C 15.3086 18.1680 13.5274 19.9726 13.5274 23.4883 L 13.5274 32.5820 C 13.5274 36.0977 15.3086 37.9024 18.6133 37.9024 L 25.5742 37.9024 C 25.8086 37.9024 26.0195 37.9726 26.1836 38.1133 L 36.5195 47.9805 C 37.6445 49.0352 38.5820 49.5039 39.7305 49.5039 Z"
  }));
}

var _default = SpeakerFill;
exports["default"] = _default;