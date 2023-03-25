"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Location(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.1367 28.2461 C 5.9569 29.0430 6.7773 29.3008 8.3945 29.3242 L 26.1367 29.3945 C 26.3007 29.3945 26.4413 29.4179 26.5116 29.4883 C 26.5820 29.5586 26.6054 29.6992 26.6054 29.8633 L 26.6757 47.6055 C 26.6991 49.2226 26.9569 50.0430 27.7773 50.8633 C 28.8789 51.9883 30.4257 51.8008 31.5741 50.6758 C 32.1835 50.0664 32.6757 49.0586 33.1210 48.1211 L 51.0509 9.4492 C 51.9884 7.4805 51.8712 6.0274 50.9103 5.0898 C 49.9724 4.1289 48.5194 4.0117 46.5507 4.9492 L 7.8789 22.8789 C 6.9413 23.3242 5.9335 23.8164 5.3241 24.4258 C 4.1991 25.5742 4.0116 27.1211 5.1367 28.2461 Z M 9.8945 25.7617 C 9.8710 25.6914 9.9179 25.6211 10.0585 25.5508 L 47.1601 8.5117 C 47.3476 8.4414 47.4413 8.4414 47.5116 8.4883 C 47.5585 8.5586 47.5585 8.6523 47.4882 8.8398 L 30.4491 45.9414 C 30.3789 46.0820 30.3085 46.1289 30.2382 46.1055 C 30.1913 46.1055 30.1210 46.0117 30.1210 45.9180 L 30.2382 27.4023 C 30.2382 26.8164 30.0273 26.4414 29.7929 26.2070 C 29.5585 25.9726 29.1835 25.7617 28.5976 25.7617 L 10.0820 25.8789 C 9.9882 25.8789 9.8945 25.8086 9.8945 25.7617 Z"
  }));
}

var _default = Location;
exports["default"] = _default;