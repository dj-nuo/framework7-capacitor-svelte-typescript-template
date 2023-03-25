"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpLeftCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 25.7968 37.8437 C 26.6405 37.8437 27.2499 37.2344 27.2499 36.3906 L 27.2499 31.5625 L 27.6249 31.5625 C 32.5234 31.5625 35.6171 32.7812 37.7968 36.9063 C 38.2187 37.7031 38.8046 37.8437 39.3436 37.8437 C 39.9999 37.8437 40.6327 37.2578 40.6327 36.1797 C 40.6327 26.8281 36.6718 21.0859 27.6249 21.0859 L 27.2499 21.0859 L 27.2499 16.2812 C 27.2499 15.4609 26.6405 14.7578 25.7733 14.7578 C 25.1405 14.7578 24.7421 15.0390 24.0858 15.6484 L 14.1249 24.9531 C 13.6327 25.3984 13.4921 25.8672 13.4921 26.3125 C 13.4921 26.7344 13.6562 27.2031 14.1249 27.6484 L 24.0858 37.0234 C 24.6718 37.5625 25.1640 37.8437 25.7968 37.8437 Z"
  }));
}

var _default = ArrowshapeTurnUpLeftCircle;
exports["default"] = _default;