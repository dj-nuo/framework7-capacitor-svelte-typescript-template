"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextBubble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.5860 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 16.0704 17.5117 L 39.9298 17.5117 C 40.6798 17.5117 41.2891 16.9258 41.2891 16.1524 C 41.2891 15.4024 40.6798 14.8164 39.9298 14.8164 L 16.0704 14.8164 C 15.3204 14.8164 14.7344 15.4024 14.7344 16.1524 C 14.7344 16.9258 15.3204 17.5117 16.0704 17.5117 Z M 16.0704 25.1289 L 39.9298 25.1289 C 40.6798 25.1289 41.2891 24.5430 41.2891 23.7695 C 41.2891 23.0430 40.6798 22.4102 39.9298 22.4102 L 16.0704 22.4102 C 15.3204 22.4102 14.7344 23.0430 14.7344 23.7695 C 14.7344 24.5430 15.3204 25.1289 16.0704 25.1289 Z M 16.0704 32.7695 L 31.5860 32.7695 C 32.3360 32.7695 32.9454 32.1836 32.9454 31.4336 C 32.9454 30.6602 32.3360 30.0508 31.5860 30.0508 L 16.0704 30.0508 C 15.3204 30.0508 14.7344 30.6602 14.7344 31.4336 C 14.7344 32.1836 15.3204 32.7695 16.0704 32.7695 Z"
  }));
}

var _default = TextBubble;
exports["default"] = _default;