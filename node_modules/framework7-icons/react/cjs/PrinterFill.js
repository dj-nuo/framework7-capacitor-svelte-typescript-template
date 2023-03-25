"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PrinterFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10.9492 8.2539 L 45.0508 8.2539 L 45.0508 7.8555 C 45.0508 4.3867 42.3789 2.8398 38.5586 2.8398 L 17.4414 2.8398 C 13.8320 2.8398 10.9492 4.3867 10.9492 7.8555 Z M 8.6524 44.2071 L 10.2695 44.2071 L 10.2695 48.7071 C 10.2695 51.8242 11.7929 53.1602 14.7461 53.1602 L 41.2539 53.1602 C 44.2304 53.1602 45.7304 51.8242 45.7304 48.7071 L 45.7304 44.2071 L 47.3711 44.2071 C 51.9181 44.2071 54.3320 41.9102 54.3320 37.3398 L 54.3320 18.2618 C 54.3320 13.6914 51.9181 11.3711 47.3711 11.3711 L 8.6524 11.3711 C 4.3164 11.3711 1.6680 13.6914 1.6680 18.2618 L 1.6680 37.3398 C 1.6680 41.9102 4.0820 44.2071 8.6524 44.2071 Z M 15.9180 49.6445 C 14.6758 49.6445 14.0429 49.0352 14.0429 47.7696 L 14.0429 29.4180 C 14.0429 28.1758 14.6758 27.5664 15.9180 27.5664 L 40.1055 27.5664 C 41.3711 27.5664 41.9570 28.1758 41.9570 29.4180 L 41.9570 47.7696 C 41.9570 49.0352 41.3711 49.6445 40.1055 49.6445 Z M 19.9961 36.0039 L 36.0508 36.0039 C 36.8711 36.0039 37.5039 35.3711 37.5039 34.5508 C 37.5039 33.7539 36.8711 33.1211 36.0508 33.1211 L 19.9961 33.1211 C 19.1524 33.1211 18.5429 33.7539 18.5429 34.5508 C 18.5429 35.3711 19.1524 36.0039 19.9961 36.0039 Z M 19.9961 44.1836 L 36.0508 44.1836 C 36.8711 44.1836 37.5039 43.5742 37.5039 42.7774 C 37.5039 41.9571 36.8711 41.3008 36.0508 41.3008 L 19.9961 41.3008 C 19.1524 41.3008 18.5429 41.9571 18.5429 42.7774 C 18.5429 43.5742 19.1524 44.1836 19.9961 44.1836 Z"
  }));
}

var _default = PrinterFill;
exports["default"] = _default;