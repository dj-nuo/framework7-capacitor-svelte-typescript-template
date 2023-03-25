"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 40.1172 C 28.5155 40.1172 28.9140 39.8828 29.3827 39.4375 L 37.3046 31.5156 C 37.6327 31.2109 37.7968 30.7890 37.7968 30.2968 C 37.7968 29.3359 37.0468 28.6094 36.0858 28.6094 C 35.5702 28.6094 35.1483 28.7968 34.8436 29.1250 L 31.9374 32.0547 L 29.5702 34.9141 L 29.7577 29.9453 L 29.7577 17.7109 C 29.7577 16.7031 29.0077 15.9531 27.9999 15.9531 C 26.9687 15.9531 26.2421 16.7031 26.2421 17.7109 L 26.2421 29.9453 L 26.4296 34.8672 L 24.0624 32.0547 L 21.1562 29.1250 C 20.8514 28.8203 20.4062 28.6094 19.9140 28.6094 C 18.9530 28.6094 18.2265 29.3359 18.2265 30.2968 C 18.2265 30.7890 18.3671 31.2109 18.6718 31.5156 L 26.6405 39.4375 C 27.1093 39.9063 27.4843 40.1172 27.9999 40.1172 Z"
  }));
}

var _default = ArrowDownCircle;
exports["default"] = _default;