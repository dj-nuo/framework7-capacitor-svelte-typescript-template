"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Eyeglasses(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 14.5229 38.0135 C 20.5413 38.0135 25.3954 33.1199 25.4941 27.2199 C 26.3426 26.9042 27.2503 26.7858 28.0001 26.7858 C 28.7499 26.7858 29.6576 26.9042 30.5061 27.2199 C 30.6048 33.1791 35.4589 38.0135 41.4773 38.0135 C 47.1797 38.0135 51.8368 33.6921 52.4090 28.1868 L 54.7569 28.1868 C 55.6452 28.1868 56.0000 27.6540 56.0000 26.9240 L 56.0000 26.1741 C 56.0000 25.4243 55.6452 24.9112 54.7569 24.9112 L 52.2708 24.9112 C 51.2646 19.8993 46.8245 16.0712 41.4773 16.0712 C 36.3468 16.0712 32.0452 19.6033 30.8415 24.3587 C 29.9339 24.0036 28.8683 23.8852 28.0001 23.8852 C 27.1319 23.8852 26.0663 24.0036 25.1586 24.3587 C 23.9353 19.6033 19.6336 16.0712 14.5229 16.0712 C 9.1755 16.0712 4.7358 19.8993 3.7294 24.9112 L 1.2431 24.9112 C .3354 24.9112 0 25.4243 0 26.1741 L 0 26.9240 C 0 27.6540 .3354 28.1868 1.2431 28.1868 L 3.5913 28.1868 C 4.1635 33.6921 8.8203 38.0135 14.5229 38.0135 Z M 14.5229 35.0537 C 10.1029 35.0537 6.5116 31.4821 6.5116 27.0424 C 6.5116 22.6223 10.1029 19.0311 14.5229 19.0311 C 18.9232 19.0311 22.5343 22.6223 22.5343 27.0424 C 22.5343 31.4821 18.9824 35.0537 14.5229 35.0537 Z M 41.4773 35.0537 C 37.0178 35.0537 33.4659 31.4821 33.4659 27.0424 C 33.4659 22.6223 37.0178 19.0311 41.4773 19.0311 C 45.8971 19.0311 49.4885 22.6223 49.4885 27.0424 C 49.4885 31.4821 45.8971 35.0537 41.4773 35.0537 Z"
  }));
}

var _default = Eyeglasses;
exports["default"] = _default;