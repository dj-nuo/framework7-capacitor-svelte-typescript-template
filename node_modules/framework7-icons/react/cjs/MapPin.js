"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MapPin(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 52.8203 C 28.9492 52.8203 30.1679 49.0703 30.1679 42.1328 L 30.1679 20.5703 C 33.9883 19.6094 36.8008 16.1406 36.8008 12.0156 C 36.8008 7.1641 32.8867 3.1797 28.0117 3.1797 C 23.1133 3.1797 19.1992 7.1641 19.1992 12.0156 C 19.1992 16.1172 22.0117 19.5859 25.8086 20.5703 L 25.8086 42.1328 C 25.8086 49.0469 27.0508 52.8203 28.0117 52.8203 Z M 25.4805 12.5078 C 23.8867 12.5078 22.4805 11.1016 22.4805 9.4609 C 22.4805 7.8437 23.8867 6.4609 25.4805 6.4609 C 27.1445 6.4609 28.4805 7.8437 28.4805 9.4609 C 28.4805 11.1016 27.1445 12.5078 25.4805 12.5078 Z"
  }));
}

var _default = MapPin;
exports["default"] = _default;