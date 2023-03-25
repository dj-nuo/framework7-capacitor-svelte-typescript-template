"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusAppFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.5860 9.4492 C 44.1954 7.0586 40.8204 6.6836 36.8360 6.6836 L 19.1173 6.6836 C 15.1798 6.6836 11.8048 7.0586 9.4142 9.4492 C 7.0235 11.8398 6.6720 15.1914 6.6720 19.1055 L 6.6720 36.8242 C 6.6720 40.8320 7.0235 44.1602 9.4142 46.5508 C 11.8048 48.9414 15.1798 49.3164 19.1876 49.3164 L 36.8360 49.3164 C 40.8204 49.3164 44.1954 48.9414 46.5860 46.5508 C 48.9767 44.1602 49.3280 40.8320 49.3280 36.8242 L 49.3280 19.1758 C 49.3280 15.1680 48.9767 11.8164 46.5860 9.4492 Z M 28.0001 41.7461 C 26.9688 41.7461 26.1485 40.9023 26.1485 39.8946 L 26.1485 29.8398 L 16.1173 29.8398 C 15.0860 29.8398 14.2657 28.9961 14.2657 28.0117 C 14.2657 27.0273 15.0860 26.1367 16.1173 26.1367 L 26.1485 26.1367 L 26.1485 16.1055 C 26.1485 15.0508 26.9688 14.2305 28.0001 14.2305 C 29.0548 14.2305 29.8516 15.0508 29.8516 16.1055 L 29.8516 26.1367 L 39.9064 26.1367 C 40.9376 26.1367 41.7579 27.0273 41.7579 28.0117 C 41.7579 28.9961 40.9376 29.8398 39.9064 29.8398 L 29.8516 29.8398 L 29.8516 39.8946 C 29.8516 40.9023 29.0548 41.7461 28.0001 41.7461 Z"
  }));
}

var _default = PlusAppFill;
exports["default"] = _default;