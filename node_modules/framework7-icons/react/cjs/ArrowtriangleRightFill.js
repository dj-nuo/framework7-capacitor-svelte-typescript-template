"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowtriangleRightFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.7109 46.6328 C 12.6484 46.6328 13.3984 46.2344 14.3828 45.7422 L 44.5000 31.1406 C 46.4922 30.1562 47.125 29.2422 47.125 28.0000 C 47.125 26.7578 46.4922 25.8672 44.5000 24.8828 L 14.3828 10.2578 C 13.375 9.7656 12.625 9.3672 11.6875 9.3672 C 9.9531 9.3672 8.875 10.6797 8.875 12.7187 L 8.8984 43.2812 C 8.8984 45.3203 9.9766 46.6328 11.7109 46.6328 Z"
  }));
}

var _default = ArrowtriangleRightFill;
exports["default"] = _default;