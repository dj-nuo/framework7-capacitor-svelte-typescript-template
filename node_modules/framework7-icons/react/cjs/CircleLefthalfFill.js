"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CircleLefthalfFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 51.2734 C 40.7382 51.2734 51.2852 40.7266 51.2852 28 C 51.2852 15.2968 40.7148 4.7266 27.9882 4.7266 C 15.2617 4.7266 4.7148 15.2968 4.7148 28 C 4.7148 40.7266 15.2851 51.2734 28.0117 51.2734 Z M 28.0117 47.3125 L 27.9882 8.7109 C 38.6757 8.7109 47.2773 17.3125 47.3007 28 C 47.3242 38.7109 38.6991 47.3125 28.0117 47.3125 Z"
  }));
}

var _default = CircleLefthalfFill;
exports["default"] = _default;