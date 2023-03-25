"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.8516 34.9140 C 5.8516 43.8906 11.7579 49.8672 22.2344 49.8672 L 27.6485 49.8672 C 28.9376 49.8672 29.7813 48.9297 29.7813 47.7813 C 29.7813 46.6328 28.9376 45.6953 27.6485 45.6953 L 22.2579 45.6953 C 14.2657 45.6953 10.0469 41.0078 10.0469 34.6797 C 10.0469 28.375 14.2657 23.9687 22.2579 23.9687 L 38.3595 23.9687 L 43.8438 23.7344 L 39.4141 27.5313 L 32.6641 34.1172 C 32.2891 34.4922 32.0782 34.9375 32.0782 35.5469 C 32.0782 36.7656 32.8985 37.6094 34.1641 37.6094 C 34.6563 37.6094 35.2657 37.375 35.6641 36.9531 L 49.4452 23.4297 C 49.9376 22.9844 50.1484 22.4453 50.1484 21.8828 C 50.1484 21.2969 49.9376 20.7578 49.4452 20.3125 L 35.6641 6.7891 C 35.2657 6.3906 34.6563 6.1328 34.1641 6.1328 C 32.8985 6.1328 32.0782 6.9766 32.0782 8.1953 C 32.0782 8.8047 32.2891 9.2500 32.6641 9.625 L 39.4141 16.2344 L 43.8438 20.0313 L 38.3595 19.7734 L 22.6095 19.7734 C 11.9220 19.7734 5.8516 25.9609 5.8516 34.9140 Z"
  }));
}

var _default = ArrowUturnRight;
exports["default"] = _default;