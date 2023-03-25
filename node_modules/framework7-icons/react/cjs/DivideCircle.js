"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DivideCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9296 22.1875 C 29.6171 22.1875 30.8124 21.0625 30.8124 19.6094 C 30.8124 17.9453 29.6405 16.7968 27.9296 16.7968 C 26.3593 16.7968 25.1405 17.9453 25.1405 19.6094 C 25.1405 21.0625 26.3593 22.1875 27.9296 22.1875 Z M 18.8593 29.9922 L 37.1171 29.9922 C 38.4296 29.9922 39.2968 29.3125 39.2968 28.0703 C 39.2968 26.7812 38.4765 26.0781 37.1171 26.0781 L 18.8593 26.0781 C 17.4765 26.0781 16.6327 26.7812 16.6327 28.0703 C 16.6327 29.3125 17.5234 29.9922 18.8593 29.9922 Z M 27.9296 39.2968 C 29.6171 39.2968 30.8124 38.1484 30.8124 36.6953 C 30.8124 35.0312 29.6405 33.9063 27.9296 33.9063 C 26.3593 33.9063 25.1405 35.0312 25.1405 36.6953 C 25.1405 38.1484 26.3593 39.2968 27.9296 39.2968 Z"
  }));
}

var _default = DivideCircle;
exports["default"] = _default;