"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SuitHeart(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 4.7265 20.6406 C 4.7265 30.6250 13.0937 40.4453 26.2890 48.8828 C 26.8046 49.1875 27.5078 49.5156 28.0000 49.5156 C 28.4922 49.5156 29.1953 49.1875 29.6875 48.8828 C 42.9062 40.4453 51.2735 30.6250 51.2735 20.6406 C 51.2735 12.3438 45.5781 6.4844 37.9843 6.4844 C 33.6250 6.4844 30.1094 8.5469 28.0000 11.7109 C 25.8906 8.5703 22.3515 6.4844 18.0156 6.4844 C 10.4219 6.4844 4.7265 12.3438 4.7265 20.6406 Z M 8.5000 20.6406 C 8.5000 14.4063 12.5312 10.2578 17.9687 10.2578 C 22.3750 10.2578 24.8828 13.0000 26.4062 15.3438 C 27.0390 16.2813 27.4375 16.5391 28.0000 16.5391 C 28.5625 16.5391 28.9141 16.2578 29.5937 15.3438 C 31.1875 13.0469 33.6484 10.2578 38.0312 10.2578 C 43.4687 10.2578 47.5000 14.4063 47.5000 20.6406 C 47.5000 29.3594 38.2890 38.7578 28.4687 45.2734 C 28.2343 45.4375 28.0937 45.5547 28.0000 45.5547 C 27.9062 45.5547 27.7422 45.4375 27.5078 45.2734 C 17.7109 38.7578 8.5000 29.3594 8.5000 20.6406 Z"
  }));
}

var _default = SuitHeart;
exports["default"] = _default;