"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GreaterthanSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 21.6132 38.0430 C 20.4413 38.0430 19.5742 37.1758 19.5742 36.0742 C 19.5742 35.1602 19.9492 34.5742 21.0039 34.1055 L 33.4726 27.9649 L 33.4726 27.8242 L 21.0039 21.5430 C 19.9960 21.0274 19.5742 20.4414 19.5742 19.5508 C 19.5742 18.4727 20.4179 17.6055 21.5429 17.6055 C 22.0820 17.6055 22.4101 17.6992 22.8085 17.8867 L 37.4804 25.8086 C 38.4413 26.3477 38.9101 27.0508 38.9101 27.9649 C 38.9101 28.9727 38.5117 29.6055 37.4804 30.1211 L 22.8085 37.7383 C 22.4335 37.9492 22.0820 38.0430 21.6132 38.0430 Z"
  }));
}

var _default = GreaterthanSquareFill;
exports["default"] = _default;