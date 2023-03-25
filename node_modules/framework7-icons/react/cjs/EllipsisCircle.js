"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EllipsisCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 20.2655 28.0234 C 20.2655 26.3125 18.8124 24.8594 17.1014 24.8594 C 15.3671 24.8594 13.9374 26.3125 13.9374 28.0234 C 13.9374 29.7344 15.3905 31.1875 17.1014 31.1875 C 18.8124 31.1875 20.2655 29.7344 20.2655 28.0234 Z M 31.1405 28.0234 C 31.1405 26.3125 29.6640 24.8594 27.9765 24.8594 C 26.2421 24.8594 24.8124 26.3125 24.8124 28.0234 C 24.8124 29.7344 26.2890 31.1875 27.9765 31.1875 C 29.6640 31.1875 31.1405 29.7344 31.1405 28.0234 Z M 42.0155 28.0234 C 42.0155 26.3125 40.5624 24.8594 38.8514 24.8594 C 37.1171 24.8594 35.6640 26.3125 35.6640 28.0234 C 35.6640 29.7344 37.1405 31.1875 38.8514 31.1875 C 40.5624 31.1875 42.0155 29.7344 42.0155 28.0234 Z"
  }));
}

var _default = EllipsisCircle;
exports["default"] = _default;