"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 14.8516 C 28.5624 14.8516 29.0077 15.0859 29.5234 15.5781 L 38.1483 24.2266 C 38.4530 24.5547 38.6874 25 38.6874 25.5390 C 38.6874 26.5937 37.8671 27.4141 36.8124 27.4141 C 36.2499 27.4141 35.7812 27.2031 35.4530 26.8516 L 32.3124 23.6641 L 29.7109 20.5703 L 29.9218 25.9844 L 29.9218 39.2734 C 29.9218 40.3984 29.1249 41.1719 27.9999 41.1719 C 26.8749 41.1719 26.0780 40.3984 26.0780 39.2734 L 26.0780 25.9844 L 26.2655 20.5937 L 23.7109 23.6641 L 20.5468 26.8516 C 20.2187 27.1797 19.7265 27.4141 19.1874 27.4141 C 18.1093 27.4141 17.3358 26.5937 17.3358 25.5390 C 17.3358 25 17.5234 24.5547 17.8514 24.2266 L 26.4999 15.5781 C 27.0155 15.0625 27.4374 14.8516 27.9999 14.8516 Z"
  }));
}

var _default = ArrowUpCircleFill;
exports["default"] = _default;