"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnRightUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 14.6523 50.1367 C 25.5039 50.1367 30.6133 45.8242 30.6133 34.9258 L 30.6133 18.6836 L 30.4258 12.3320 L 35.1133 17.4649 L 42.7774 25.1524 C 43.1523 25.5273 43.7148 25.7149 44.2774 25.7149 C 45.4258 25.7149 46.2930 24.8242 46.2930 23.6758 C 46.2930 23.1133 46.0820 22.6211 45.6367 22.1524 L 30.0976 6.5664 C 29.6289 6.0976 29.0898 5.8633 28.5274 5.8633 C 27.9414 5.8633 27.4023 6.0976 26.9570 6.5664 L 11.3945 22.1524 C 10.9492 22.6211 10.7617 23.1133 10.7617 23.6758 C 10.7617 24.8242 11.6054 25.7149 12.7774 25.7149 C 13.3164 25.7149 13.8789 25.5273 14.2539 25.1524 L 21.9414 17.4649 L 26.6289 12.3086 L 26.4179 18.6836 L 26.4414 34.7149 C 26.4648 43.1992 22.7852 46.0352 14.4648 46.0352 C 13.3633 46.0352 12.6133 45.9883 11.7930 45.9883 C 10.5976 45.9883 9.7070 46.7617 9.7070 47.9805 C 9.7070 49.1758 10.5508 49.7617 11.4648 49.9727 C 12.1679 50.1133 13.3164 50.1367 14.6523 50.1367 Z"
  }));
}

var _default = ArrowTurnRightUp;
exports["default"] = _default;