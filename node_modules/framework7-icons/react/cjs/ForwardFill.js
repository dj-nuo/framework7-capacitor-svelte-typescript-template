"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ForwardFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.9281 44.4947 C 3.7618 44.4947 4.4531 44.2304 5.2665 43.7424 L 25.9869 31.5420 C 27.1053 30.8913 27.7153 30.1592 27.9389 29.3052 L 27.9389 41.0176 C 27.9389 43.2747 29.2810 44.4947 30.8671 44.4947 C 31.7007 44.4947 32.3921 44.2304 33.2055 43.7424 L 53.9461 31.5420 C 55.3695 30.6879 56 29.6916 56 28.5122 C 56 27.3531 55.3695 26.3568 53.9461 25.5028 L 33.2055 13.3023 C 32.3921 12.8143 31.7007 12.5500 30.8671 12.5500 C 29.2810 12.5500 27.9389 13.7700 27.9389 16.0271 L 27.9389 27.7395 C 27.7153 26.8855 27.1053 26.1535 25.9869 25.5028 L 5.2665 13.3023 C 4.4328 12.8143 3.7618 12.5500 2.9281 12.5500 C 1.3420 12.5500 0 13.7700 0 16.0271 L 0 41.0176 C 0 43.2747 1.3420 44.4947 2.9281 44.4947 Z"
  }));
}

var _default = ForwardFill;
exports["default"] = _default;