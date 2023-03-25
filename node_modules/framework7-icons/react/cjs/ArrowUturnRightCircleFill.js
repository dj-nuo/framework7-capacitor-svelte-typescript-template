"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0547 51.9063 28 C 51.9063 14.9219 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9219 4.0937 28 C 4.0937 41.0547 14.9218 51.9063 27.9999 51.9063 Z M 14.0077 31.3984 C 14.0077 25.3047 18.4374 21.6016 24.3436 21.6016 L 31.9140 21.6016 L 34.9374 21.6953 L 32.9452 20.1250 L 30.2968 17.5703 C 29.9452 17.2656 29.7109 16.7734 29.7109 16.2578 C 29.7109 15.2031 30.5312 14.4063 31.5390 14.4063 C 32.1014 14.4063 32.4765 14.5703 32.8280 14.9687 L 39.6014 21.7890 C 39.9999 22.2344 40.2812 22.75 40.2812 23.3594 C 40.2812 23.9687 39.9999 24.4609 39.6014 24.8828 L 32.8046 31.7968 C 32.4530 32.1719 32.0546 32.3594 31.5155 32.3594 C 30.5312 32.3594 29.7109 31.5390 29.7109 30.4844 C 29.7109 30.0156 29.8983 29.5 30.2733 29.1719 L 33.4609 26.1484 L 34.9374 25.0468 L 31.9140 25.1406 L 24.3436 25.1406 C 20.6171 25.1406 17.7343 27.2734 17.7343 31.1875 C 17.7343 35.1953 20.5234 37.6797 24.3671 37.6797 L 27.9062 37.6797 C 28.9843 37.6797 29.8046 38.3125 29.8046 39.4844 C 29.8046 40.6328 28.9843 41.3125 27.8593 41.3125 L 24.3671 41.3125 C 18.4609 41.3125 14.0077 37.4922 14.0077 31.3984 Z"
  }));
}

var _default = ArrowUturnRightCircleFill;
exports["default"] = _default;