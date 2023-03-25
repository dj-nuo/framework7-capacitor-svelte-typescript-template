"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GreaterthanCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 21.5780 38.0781 C 20.3827 38.0781 19.5390 37.2109 19.5390 36.1094 C 19.5390 35.1953 19.9140 34.6094 20.9687 34.1406 L 33.4374 28 L 33.4374 27.8594 L 20.9687 21.5781 C 19.9609 21.0625 19.5390 20.4766 19.5390 19.5859 C 19.5390 18.5078 20.3593 17.6406 21.5077 17.6406 C 22.0468 17.6406 22.3749 17.7344 22.7733 17.9219 L 37.4218 25.8437 C 38.3827 26.3828 38.8749 27.0859 38.8749 28 C 38.8749 29.0078 38.4530 29.6406 37.4218 30.1563 L 22.7733 37.7734 C 22.3983 37.9844 22.0468 38.0781 21.5780 38.0781 Z"
  }));
}

var _default = GreaterthanCircleFill;
exports["default"] = _default;