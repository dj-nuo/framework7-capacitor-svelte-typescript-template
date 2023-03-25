"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LessthanCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 34.3514 38.0781 C 33.9062 38.0781 33.5312 37.9844 33.1796 37.7734 L 18.5077 30.1563 C 17.4765 29.6406 17.0780 29.0078 17.0780 28 C 17.0780 27.0859 17.5468 26.3828 18.5077 25.8437 L 33.1796 17.9219 C 33.5780 17.7344 33.9062 17.6406 34.4218 17.6406 C 35.5702 17.6406 36.3905 18.5078 36.3905 19.5859 C 36.3905 20.4766 35.9687 21.0625 34.9843 21.5781 L 22.5155 27.8594 L 22.5155 28 L 34.9843 34.1406 C 36.0155 34.6094 36.3905 35.1953 36.3905 36.1094 C 36.3905 37.2109 35.5468 38.0781 34.3514 38.0781 Z"
  }));
}

var _default = LessthanCircleFill;
exports["default"] = _default;