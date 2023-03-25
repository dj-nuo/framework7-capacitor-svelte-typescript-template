"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Grid(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.2109 38.1836 L 17.5703 38.1836 L 17.5703 48.3555 C 17.5703 49.5039 18.2500 50.2070 19.3515 50.2070 C 20.4296 50.2070 21.1093 49.5039 21.1093 48.3555 L 21.1093 38.1836 L 34.7500 38.1836 L 34.7500 48.3555 C 34.7500 49.5039 35.4296 50.2070 36.5312 50.2070 C 37.6093 50.2070 38.2890 49.5039 38.2890 48.3555 L 38.2890 38.1836 L 48.8123 38.1836 C 49.9609 38.1836 50.6641 37.5039 50.6641 36.4023 C 50.6641 35.3008 49.9609 34.6445 48.8123 34.6445 L 38.2890 34.6445 L 38.2890 21.4492 L 48.8123 21.4492 C 49.9609 21.4492 50.6641 20.7695 50.6641 19.6914 C 50.6641 18.5898 49.9609 17.9101 48.8123 17.9101 L 38.2890 17.9101 L 38.2890 7.6679 C 38.2890 6.5195 37.6093 5.7930 36.5312 5.7930 C 35.4296 5.7930 34.7500 6.5195 34.7500 7.6679 L 34.7500 17.9101 L 21.1093 17.9101 L 21.1093 7.6679 C 21.1093 6.5195 20.4296 5.7930 19.3515 5.7930 C 18.2500 5.7930 17.5703 6.5195 17.5703 7.6679 L 17.5703 17.9101 L 7.2109 17.9101 C 6.0390 17.9101 5.3359 18.5898 5.3359 19.6914 C 5.3359 20.7695 6.0390 21.4492 7.2109 21.4492 L 17.5703 21.4492 L 17.5703 34.6445 L 7.2109 34.6445 C 6.0390 34.6445 5.3359 35.3008 5.3359 36.4023 C 5.3359 37.5039 6.0390 38.1836 7.2109 38.1836 Z M 21.1093 34.6445 L 21.1093 21.4492 L 34.7500 21.4492 L 34.7500 34.6445 Z"
  }));
}

var _default = Grid;
exports["default"] = _default;