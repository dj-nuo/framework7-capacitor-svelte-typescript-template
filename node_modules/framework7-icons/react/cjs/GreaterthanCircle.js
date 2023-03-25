"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GreaterthanCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.9062 37.6094 C 22.3749 37.6094 22.7030 37.5156 23.0312 37.3281 L 36.9999 30.0859 C 37.9843 29.5703 38.4062 28.9844 38.4062 28.0234 C 38.4062 27.1328 37.9374 26.4531 36.9999 25.9609 L 23.0312 18.4141 C 22.6796 18.2266 22.3749 18.1563 21.8593 18.1563 C 20.7812 18.1563 19.9609 18.9531 19.9609 20.0078 C 19.9609 20.8516 20.3827 21.4141 21.3436 21.9063 L 33.2030 27.8594 L 33.2030 28 L 21.3436 33.8359 C 20.3593 34.3047 19.9609 34.8437 19.9609 35.7344 C 19.9609 36.7890 20.8046 37.6094 21.9062 37.6094 Z"
  }));
}

var _default = GreaterthanCircle;
exports["default"] = _default;