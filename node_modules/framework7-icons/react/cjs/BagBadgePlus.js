"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BagBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.4570 10.9610 L 42.7070 10.9610 C 42.5899 6.0391 38.3008 1.8437 33.0039 1.8437 C 27.7070 1.8437 23.4180 6.0391 23.3008 10.9610 L 19.5742 10.9610 C 14.6758 10.9610 12.2148 13.3750 12.2148 18.2266 L 12.2148 27.25 C 12.8477 27.1797 13.4805 27.1328 14.0899 27.1328 C 14.7227 27.1328 15.3555 27.1797 15.9883 27.25 L 15.9883 18.4141 C 15.9883 15.9766 17.3008 14.7344 19.6211 14.7344 L 46.3867 14.7344 C 48.7073 14.7344 50.0431 15.9766 50.0431 18.4141 L 50.0431 42.2969 C 50.0431 44.7344 48.7073 45.9766 47.0897 45.9766 L 28.6914 45.9766 C 28.3867 47.3125 27.8711 48.5781 27.1914 49.7500 L 47.1602 49.7500 C 51.3554 49.7500 53.8164 47.3125 53.8164 42.4844 L 53.8164 18.2266 C 53.8164 13.3984 51.3319 10.9610 46.4570 10.9610 Z M 33.0039 5.4063 C 36.3086 5.4063 38.8399 7.8906 38.9336 10.9610 L 27.0742 10.9610 C 27.1914 7.8906 29.6992 5.4063 33.0039 5.4063 Z M 14.0899 54.1563 C 20.5586 54.1563 25.9961 48.7656 25.9961 42.2500 C 25.9961 35.7344 20.6289 30.3437 14.0899 30.3437 C 7.5742 30.3437 2.1836 35.7344 2.1836 42.2500 C 2.1836 48.8125 7.5742 54.1563 14.0899 54.1563 Z M 14.1133 49.9844 C 13.2930 49.9844 12.5664 49.4219 12.5664 48.5547 L 12.5664 43.6797 L 8.0899 43.6797 C 7.2930 43.6797 6.6367 43.0234 6.6367 42.2500 C 6.6367 41.4766 7.2930 40.8203 8.0899 40.8203 L 12.5664 40.8203 L 12.5664 35.9688 C 12.5664 35.0781 13.2930 34.5156 14.1133 34.5156 C 14.9102 34.5156 15.6367 35.0781 15.6367 35.9688 L 15.6367 40.8203 L 20.1133 40.8203 C 20.9102 40.8203 21.5430 41.4766 21.5430 42.2500 C 21.5430 43.0234 20.9102 43.6797 20.1133 43.6797 L 15.6367 43.6797 L 15.6367 48.5547 C 15.6367 49.4219 14.9102 49.9844 14.1133 49.9844 Z"
  }));
}

var _default = BagBadgePlus;
exports["default"] = _default;