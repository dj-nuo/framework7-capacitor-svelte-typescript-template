"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function InfoCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.7890 19.6563 C 29.4999 19.6563 30.8358 18.2968 30.8358 16.6094 C 30.8358 14.8984 29.4999 13.5390 27.7890 13.5390 C 26.0780 13.5390 24.7421 14.8984 24.7421 16.6094 C 24.7421 18.2968 26.0780 19.6563 27.7890 19.6563 Z M 23.8749 40.8906 L 33.4374 40.8906 C 34.3983 40.8906 35.1483 40.2109 35.1483 39.25 C 35.1483 38.3359 34.3983 37.6094 33.4374 37.6094 L 30.5312 37.6094 L 30.5312 25.6797 C 30.5312 24.4141 29.8749 23.5703 28.7030 23.5703 L 24.2733 23.5703 C 23.3358 23.5703 22.5858 24.2968 22.5858 25.2109 C 22.5858 26.1719 23.3358 26.8516 24.2733 26.8516 L 26.8046 26.8516 L 26.8046 37.6094 L 23.8749 37.6094 C 22.9374 37.6094 22.1874 38.3359 22.1874 39.25 C 22.1874 40.2109 22.9374 40.8906 23.8749 40.8906 Z"
  }));
}

var _default = InfoCircle;
exports["default"] = _default;