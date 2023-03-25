"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowtriangleLeftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.3008 9.3672 C 43.3633 9.3672 42.6133 9.7656 41.6289 10.2578 L 11.5117 24.8828 C 9.5195 25.8672 8.8867 26.7578 8.8867 28.0000 C 8.8867 29.2422 9.5195 30.1562 11.5117 31.1406 L 41.6289 45.7422 C 42.6367 46.2344 43.3867 46.6328 44.3242 46.6328 C 46.0586 46.6328 47.1133 45.3203 47.1133 43.2812 L 47.1133 12.7187 C 47.1133 10.6797 46.0352 9.3672 44.3008 9.3672 Z"
  }));
}

var _default = ArrowtriangleLeftFill;
exports["default"] = _default;