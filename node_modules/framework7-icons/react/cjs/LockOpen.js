"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockOpen(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 40.4336 3.1797 C 33.8242 3.1797 27.4492 7.7266 27.4492 17.4063 L 27.4492 24.4844 L 7.7851 24.4844 C 4.2695 24.4844 2.5586 26.2188 2.5586 29.9922 L 2.5586 47.3125 C 2.5586 51.1094 4.2695 52.8203 7.7851 52.8203 L 30.5195 52.8203 C 34.0351 52.8203 35.7461 51.1094 35.7461 47.3125 L 35.7461 29.9922 C 35.7461 26.4766 34.2695 24.7422 31.2227 24.5312 L 31.2227 16.9141 C 31.2227 10.2578 35.5351 6.7656 40.4336 6.7656 C 45.3553 6.7656 49.6681 10.2578 49.6681 16.9141 L 49.6681 22.3047 C 49.6681 23.9688 50.4884 24.6719 51.5665 24.6719 C 52.5976 24.6719 53.4414 24.0391 53.4414 22.3750 L 53.4414 17.4063 C 53.4414 7.7266 47.0430 3.1797 40.4336 3.1797 Z M 30.3555 28.0234 C 31.4570 28.0234 31.9727 28.4922 31.9727 29.7813 L 31.9727 47.5000 C 31.9727 48.8125 31.4570 49.3047 30.3555 49.3047 L 7.9492 49.3047 C 6.8711 49.3047 6.3320 48.8125 6.3320 47.5000 L 6.3320 29.7813 C 6.3320 28.4922 6.8711 28.0234 7.9492 28.0234 Z"
  }));
}

var _default = LockOpen;
exports["default"] = _default;