"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LocationNorth(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.9922 52.375 C 13.1641 52.375 13.9141 51.9531 15.0625 50.8281 L 27.6719 38.3359 C 27.7891 38.2187 27.8828 38.125 28.0000 38.125 C 28.1172 38.125 28.2110 38.2187 28.3281 38.3359 L 40.9375 50.8281 C 42.0859 51.9531 42.8359 52.375 44.0078 52.375 C 45.5781 52.375 46.5625 51.1562 46.5625 49.5625 C 46.5625 48.6719 46.1875 47.6172 45.8359 46.6562 L 31.1875 6.6250 C 30.4375 4.5625 29.3359 3.6250 28.0000 3.6250 C 26.6641 3.6250 25.5625 4.5625 24.8125 6.6250 L 10.1641 46.6562 C 9.8125 47.6172 9.4375 48.6719 9.4375 49.5625 C 9.4375 51.1562 10.4219 52.375 11.9922 52.375 Z M 13.6094 47.2656 C 13.5391 47.2187 13.5156 47.1250 13.5859 46.9844 L 27.7656 8.7109 C 27.8359 8.5234 27.9062 8.4531 28.0000 8.4531 C 28.0937 8.4531 28.1641 8.5234 28.2344 8.7109 L 42.4141 46.9844 C 42.4844 47.1250 42.4610 47.2187 42.3906 47.2656 C 42.3437 47.2890 42.2500 47.2656 42.1797 47.2187 L 29.1719 34.0234 C 28.7500 33.6015 28.3281 33.5078 28.0000 33.5078 C 27.6484 33.5078 27.2500 33.6015 26.8281 34.0234 L 13.8203 47.2187 C 13.7500 47.2656 13.6562 47.2890 13.6094 47.2656 Z"
  }));
}

var _default = LocationNorth;
exports["default"] = _default;