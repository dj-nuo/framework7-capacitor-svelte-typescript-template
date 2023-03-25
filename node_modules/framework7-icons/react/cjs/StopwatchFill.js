"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StopwatchFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 54.2734 C 41.0546 54.2734 51.9063 43.4453 51.9063 30.3672 C 51.9063 24.9062 50.0079 19.8438 46.8436 15.7891 L 48.6716 13.9375 C 49.2107 13.3984 49.5155 12.6719 49.5155 12.0391 C 49.5155 10.7266 48.4609 9.6719 47.1014 9.6719 C 46.3046 9.6719 45.7421 9.9062 45.1796 10.4453 L 43.3983 12.2031 C 39.8124 9.1562 35.3593 7.1172 30.4843 6.6016 L 30.4843 4.3047 C 30.4843 2.8984 29.3593 1.7266 27.9765 1.7266 C 26.5936 1.7266 25.4452 2.8984 25.4452 4.3047 L 25.4452 6.6016 C 13.5390 7.8906 4.0937 18.1562 4.0937 30.3672 C 4.0937 43.4453 14.9218 54.2734 27.9999 54.2734 Z M 27.9999 34.1640 C 25.8905 34.1640 24.2030 32.4766 24.2030 30.3906 C 24.2030 28.9141 25.0702 27.6484 26.3593 26.9687 L 26.3593 15.3438 C 26.3593 14.4297 27.0624 13.7266 27.9765 13.7266 C 28.8905 13.7266 29.6171 14.4297 29.6171 15.3438 L 29.6171 26.9922 C 30.9062 27.625 31.7499 28.9141 31.7499 30.3906 C 31.7499 32.4766 30.0858 34.1640 27.9999 34.1640 Z"
  }));
}

var _default = StopwatchFill;
exports["default"] = _default;