"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnRightDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 14.6523 5.8633 C 13.3164 5.8633 12.1679 5.9102 11.4648 6.0273 C 10.5508 6.2149 9.7070 6.8242 9.7070 8.0195 C 9.7070 9.2383 10.5976 10.0117 11.7930 10.0117 C 12.6133 10.0117 13.3633 9.9649 14.4648 9.9649 C 22.7852 9.9649 26.4648 12.8008 26.4414 21.2851 L 26.4179 37.3164 L 26.6289 43.6914 L 21.9414 38.5352 L 14.2539 30.8476 C 13.8789 30.4727 13.3164 30.2851 12.7774 30.2851 C 11.6054 30.2851 10.7617 31.1758 10.7617 32.3242 C 10.7617 32.8867 10.9492 33.3789 11.3945 33.8476 L 26.9570 49.4336 C 27.4023 49.9024 27.9414 50.1367 28.5274 50.1367 C 29.0898 50.1367 29.6289 49.9024 30.0976 49.4336 L 45.6367 33.8476 C 46.0820 33.3789 46.2930 32.8867 46.2930 32.3242 C 46.2930 31.1758 45.4258 30.2851 44.2774 30.2851 C 43.7148 30.2851 43.1523 30.4727 42.7774 30.8476 L 35.1133 38.5352 L 30.4258 43.6680 L 30.6133 37.3164 L 30.6133 21.0742 C 30.6133 10.1758 25.5039 5.8633 14.6523 5.8633 Z"
  }));
}

var _default = ArrowTurnRightDown;
exports["default"] = _default;