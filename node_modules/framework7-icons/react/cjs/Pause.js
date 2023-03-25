"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Pause(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.2656 47.3594 C 21.3672 47.3594 22.2578 46.5156 22.2578 45.4141 L 22.2578 10.6094 C 22.2578 9.5078 21.3672 8.6406 20.2656 8.6406 C 19.1641 8.6406 18.25 9.5078 18.25 10.6094 L 18.25 45.4141 C 18.25 46.5156 19.1641 47.3594 20.2656 47.3594 Z M 35.7578 47.3594 C 36.8594 47.3594 37.75 46.5156 37.75 45.4141 L 37.75 10.6094 C 37.75 9.5078 36.8594 8.6406 35.7578 8.6406 C 34.6563 8.6406 33.7422 9.5078 33.7422 10.6094 L 33.7422 45.4141 C 33.7422 46.5156 34.6563 47.3594 35.7578 47.3594 Z"
  }));
}

var _default = Pause;
exports["default"] = _default;