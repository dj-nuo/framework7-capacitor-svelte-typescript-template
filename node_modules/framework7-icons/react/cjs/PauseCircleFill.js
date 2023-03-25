"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PauseCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 21.8593 36.4609 C 20.7812 36.4609 20.3124 35.8984 20.3124 35.0312 L 20.3124 20.9922 C 20.3124 20.1484 20.7812 19.5625 21.8593 19.5625 L 23.9921 19.5625 C 25.0702 19.5625 25.5390 20.1484 25.5390 20.9922 L 25.5390 35.0312 C 25.5390 35.8984 25.0702 36.4609 23.9921 36.4609 Z M 31.9843 36.4609 C 30.9296 36.4609 30.4140 35.8984 30.4140 35.0312 L 30.4140 20.9922 C 30.4140 20.1484 30.9296 19.5625 31.9843 19.5625 L 34.1171 19.5625 C 35.1718 19.5625 35.6640 20.1484 35.6640 20.9922 L 35.6640 35.0312 C 35.6640 35.8984 35.1718 36.4609 34.1171 36.4609 Z"
  }));
}

var _default = PauseCircleFill;
exports["default"] = _default;