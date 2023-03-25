"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PanoFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 3.7112 47.4863 C 7.8201 47.4863 14.0498 42.6263 27.9891 42.6263 C 41.9284 42.6263 48.2021 47.4642 52.2888 47.4642 C 54.6970 47.4642 56 45.9841 56 43.5320 L 56 13.5990 C 56 11.1248 54.6970 9.6447 52.2888 9.6447 C 48.2021 9.6447 41.9284 14.5047 27.9891 14.5047 C 14.0718 14.5047 7.7980 9.6447 3.7112 9.6447 C 1.3033 9.6447 0 11.1248 0 13.5769 L 0 43.5541 C 0 46.0062 1.3033 47.4863 3.7112 47.4863 Z"
  }));
}

var _default = PanoFill;
exports["default"] = _default;