"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Cube(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.5860 42.7422 L 25.9844 53.1953 C 27.3438 53.9687 28.6094 53.9922 30.0157 53.1953 L 48.4141 42.7422 C 50.5938 41.5000 51.7890 40.2344 51.7890 36.8359 L 51.7890 18.2734 C 51.7890 15.6719 50.7580 14.1953 48.8360 13.0937 L 32.2657 3.6719 C 29.3829 2.0078 26.5704 2.0312 23.7344 3.6719 L 7.1641 13.0937 C 5.2422 14.1953 4.2110 15.6719 4.2110 18.2734 L 4.2110 36.8359 C 4.2110 40.2344 5.4063 41.5000 7.5860 42.7422 Z M 28.0000 26.0312 L 10.1407 15.9297 L 25.3985 7.2109 C 27.1797 6.2031 28.7735 6.1797 30.6016 7.2109 L 45.8595 15.9297 Z M 9.7891 39.4609 C 8.4532 38.7109 8.0079 37.9843 8.0079 36.7187 L 8.0079 19.2343 L 26.0313 29.5234 L 26.0313 48.6953 Z M 46.2110 39.4609 L 29.9688 48.6953 L 29.9688 29.5234 L 47.9922 19.2343 L 47.9922 36.7187 C 47.9922 37.9843 47.5468 38.7109 46.2110 39.4609 Z"
  }));
}

var _default = Cube;
exports["default"] = _default;