"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MicFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 35.1016 28.0000 L 35.1016 11.2656 C 35.1016 6.9297 32.1719 3.7187 28 3.7187 C 23.8281 3.7187 20.8984 6.9297 20.8984 11.2656 L 20.8984 28.0000 C 20.8984 32.3125 23.8281 35.5469 28 35.5469 C 32.1719 35.5469 35.1016 32.3125 35.1016 28.0000 Z M 17.0547 48.7422 C 16.1172 48.7422 15.2969 49.5859 15.2969 50.5234 C 15.2969 51.4609 16.1172 52.2813 17.0547 52.2813 L 38.9453 52.2813 C 39.8828 52.2813 40.7031 51.4609 40.7031 50.5234 C 40.7031 49.5859 39.8828 48.7422 38.9453 48.7422 L 29.7578 48.7422 L 29.7578 43.6094 C 38.2890 42.8594 43.9375 36.5547 43.9375 27.9766 L 43.9375 22.4687 C 43.9375 21.5547 43.1172 20.7578 42.2031 20.7578 C 41.2890 20.7578 40.4922 21.5547 40.4922 22.4687 L 40.4922 27.9766 C 40.4922 35.125 35.3359 40.375 28 40.375 C 20.6641 40.375 15.5078 35.125 15.5078 27.9766 L 15.5078 22.4687 C 15.5078 21.5547 14.7110 20.7578 13.7969 20.7578 C 12.8828 20.7578 12.0625 21.5547 12.0625 22.4687 L 12.0625 27.9766 C 12.0625 36.5547 17.7110 42.8594 26.2188 43.6094 L 26.2188 48.7422 Z"
  }));
}

var _default = MicFill;
exports["default"] = _default;