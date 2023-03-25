"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 17.6874 38.5703 C 15.1796 38.5703 13.9140 37.3281 13.9140 34.8906 L 13.9140 22.375 C 13.9140 19.9140 15.1796 18.6719 17.6874 18.6719 L 20.3827 18.6719 C 21.3202 18.6719 21.6014 18.4609 22.1405 17.8984 L 23.1014 16.8203 C 23.7109 16.1640 24.3202 15.8125 25.5390 15.8125 L 30.3202 15.8125 C 31.5390 15.8125 32.1483 16.1640 32.7343 16.8203 L 33.6952 17.8984 C 34.2343 18.5078 34.5155 18.6719 35.4530 18.6719 L 38.2655 18.6719 C 40.7265 18.6719 42.0155 19.9140 42.0155 22.375 L 42.0155 34.8906 C 42.0155 37.3281 40.7265 38.5703 38.2655 38.5703 Z M 27.8358 35.2422 C 31.7265 35.2422 34.8436 32.1953 34.8436 28.1875 C 34.8436 24.2969 31.7265 21.1797 27.8358 21.1797 C 23.9452 21.1797 20.7812 24.2969 20.7812 28.1875 C 20.7812 32.125 23.9452 35.2422 27.8358 35.2422 Z M 37.0468 25.0703 C 37.9140 25.0703 38.6405 24.3672 38.6171 23.4766 C 38.6171 22.5860 37.9140 21.8828 37.0468 21.8828 C 36.1796 21.8828 35.4530 22.5860 35.4530 23.4766 C 35.4530 24.3672 36.1796 25.0703 37.0468 25.0703 Z M 27.8358 33.2031 C 25.0702 33.2031 22.8202 30.9766 22.8202 28.1875 C 22.8202 25.4219 25.0702 23.1953 27.8358 23.1953 C 30.5780 23.1953 32.8280 25.4219 32.8280 28.1875 C 32.8280 30.9766 30.5780 33.2031 27.8358 33.2031 Z"
  }));
}

var _default = CameraCircleFill;
exports["default"] = _default;