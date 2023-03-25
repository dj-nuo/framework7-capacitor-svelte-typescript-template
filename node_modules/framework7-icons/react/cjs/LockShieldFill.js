"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockShieldFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 51.2969 C 28.3633 51.2969 28.9492 51.1562 29.5586 50.8516 C 42.6602 43.4688 47.1836 40.3750 47.1836 31.9609 L 47.1836 14.2891 C 47.1836 11.8750 46.1289 11.1016 44.1836 10.2813 C 41.4414 9.1562 32.6524 5.9922 29.9336 5.0313 C 29.3008 4.8438 28.6680 4.7031 27.9883 4.7031 C 27.3320 4.7031 26.6992 4.8438 26.0664 5.0313 C 23.3476 6.0156 14.5586 9.1797 11.8164 10.2813 C 9.8711 11.0781 8.8164 11.8750 8.8164 14.2891 L 8.8164 31.9609 C 8.8164 40.3750 13.3633 43.4453 26.4414 50.8516 C 27.0508 51.1562 27.6133 51.2969 27.9883 51.2969 Z M 19.7617 35.7344 L 19.7617 26.6406 C 19.7617 25.1172 20.3476 24.3203 21.5898 24.1328 L 21.5898 21.3203 C 21.5898 17.0078 24.1914 14.1016 27.9883 14.1016 C 31.8086 14.1016 34.3867 17.0078 34.3867 21.3203 L 34.3867 24.1094 C 35.6524 24.2969 36.2383 25.0938 36.2383 26.6406 L 36.2383 35.7344 C 36.2383 37.4922 35.4649 38.3125 33.8242 38.3125 L 22.1524 38.3125 C 20.5351 38.3125 19.7617 37.4922 19.7617 35.7344 Z M 24.0508 24.0860 L 31.9492 24.0625 L 31.9492 21.0625 C 31.9492 18.2969 30.3789 16.4687 27.9883 16.4687 C 25.6211 16.4687 24.0508 18.2969 24.0508 21.0625 Z"
  }));
}

var _default = LockShieldFill;
exports["default"] = _default;