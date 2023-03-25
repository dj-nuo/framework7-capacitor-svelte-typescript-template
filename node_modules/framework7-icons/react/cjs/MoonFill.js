"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoonFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.1485 36.1563 C 28.4688 36.1563 20.3594 28.2109 20.3594 15.5078 C 20.3594 12.8828 20.9923 9.1328 21.8126 7.1875 C 22.0469 6.6484 22.0704 6.3203 22.0704 6.0859 C 22.0704 5.4531 21.6016 4.7500 20.7110 4.7500 C 20.4298 4.7500 19.8907 4.8203 19.3751 5.0078 C 10.7032 8.4766 4.8907 17.8047 4.8907 27.6250 C 4.8907 41.4062 15.3907 51.25 29.1251 51.25 C 39.2032 51.25 47.9688 45.1328 50.8751 37.4922 C 51.0627 36.9531 51.1093 36.3906 51.1093 36.1797 C 51.1093 35.3125 50.4061 34.7266 49.7499 34.7266 C 49.4451 34.7266 49.1874 34.7968 48.7424 34.9375 C 46.9376 35.5234 44.0313 36.1563 41.1485 36.1563 Z"
  }));
}

var _default = MoonFill;
exports["default"] = _default;