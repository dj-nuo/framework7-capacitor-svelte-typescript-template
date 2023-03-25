"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowUpFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 19.3397 C 29.0195 19.3397 29.8633 18.5194 29.8633 17.5350 L 29.8633 10.1991 L 29.7226 6.7069 L 31.3164 8.3710 L 34.8555 12.1444 C 35.1836 12.5194 35.6758 12.7069 36.1211 12.7069 C 37.1055 12.7069 37.8320 12.0038 37.8320 11.0663 C 37.8320 10.5507 37.6445 10.1757 37.2930 9.8241 L 29.3711 2.1835 C 28.9023 1.7146 28.4805 1.5509 28.0117 1.5509 C 27.5195 1.5509 27.1211 1.7146 26.6523 2.1835 L 18.7305 9.8241 C 18.3789 10.1757 18.1679 10.5507 18.1679 11.0663 C 18.1679 12.0038 18.8711 12.7069 19.8555 12.7069 C 20.3242 12.7069 20.8164 12.5194 21.1445 12.1444 L 24.7070 8.3710 L 26.3008 6.6835 L 26.1367 10.1991 L 26.1367 17.5350 C 26.1367 18.5194 27.0039 19.3397 28.0117 19.3397 Z M 14.5586 54.4491 L 41.4414 54.4491 C 46.3633 54.4491 48.8008 52.0116 48.8008 47.1835 L 48.8008 24.7772 C 48.8008 19.9491 46.3633 17.5116 41.4414 17.5116 L 30.4023 17.5116 L 30.4023 34.2694 C 30.4023 35.5585 29.3008 36.6366 28.0117 36.6366 C 26.6992 36.6366 25.6211 35.5585 25.6211 34.2694 L 25.6211 17.5116 L 14.5586 17.5116 C 9.6836 17.5116 7.1992 19.9257 7.1992 24.7772 L 7.1992 47.1835 C 7.1992 52.0350 9.6836 54.4491 14.5586 54.4491 Z"
  }));
}

var _default = SquareArrowUpFill;
exports["default"] = _default;