"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronCompactDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.6055 26.6172 L 24.5899 32.8750 C 25.6679 33.2968 26.9570 33.8125 28.0117 33.8125 C 29.0430 33.8125 30.3555 33.2968 31.4336 32.8750 L 47.4179 26.6172 C 48.3320 26.2656 48.8945 25.4688 48.8945 24.6016 C 48.8945 23.2188 47.8867 22.1875 46.5274 22.1875 C 45.8477 22.1875 44.8867 22.5859 44.3008 22.7968 L 28.0117 29.1953 L 11.7226 22.7968 C 11.1133 22.5859 10.1992 22.1875 9.4961 22.1875 C 8.1133 22.1875 7.1055 23.2188 7.1055 24.6016 C 7.1055 25.4688 7.6914 26.2656 8.6055 26.6172 Z"
  }));
}

var _default = ChevronCompactDown;
exports["default"] = _default;