"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DivideCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9296 21.8828 C 26.2890 21.8828 24.9999 20.7109 24.9999 19.1641 C 24.9999 17.4531 26.2890 16.2109 27.9296 16.2109 C 29.7109 16.2109 30.9530 17.4297 30.9530 19.1641 C 30.9530 20.6875 29.6874 21.8828 27.9296 21.8828 Z M 18.4140 30.0859 C 17.0077 30.0859 16.0702 29.3828 16.0702 28.0469 C 16.0702 26.7109 16.9609 25.9609 18.4140 25.9609 L 37.5858 25.9609 C 38.9921 25.9609 39.8827 26.7109 39.8827 28.0469 C 39.8827 29.3828 38.9452 30.0859 37.5858 30.0859 Z M 27.9296 39.8359 C 26.2890 39.8359 24.9999 38.6406 24.9999 37.1172 C 24.9999 35.3594 26.2890 34.1641 27.9296 34.1641 C 29.7109 34.1641 30.9530 35.3594 30.9530 37.1172 C 30.9530 38.6406 29.6874 39.8359 27.9296 39.8359 Z"
  }));
}

var _default = DivideCircleFill;
exports["default"] = _default;