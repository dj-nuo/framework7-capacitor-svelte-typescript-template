"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Person(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 28.0234 C 33.5898 28.0234 38.1367 23.0547 38.1367 17.0078 C 38.1367 11.0078 33.6367 6.2969 28.0117 6.2969 C 22.4570 6.2969 17.8867 11.1016 17.8867 17.0547 C 17.9101 23.0782 22.4570 28.0234 28.0117 28.0234 Z M 28.0117 24.4844 C 24.5898 24.4844 21.6601 21.2031 21.6601 17.0547 C 21.6601 12.9766 24.5430 9.8360 28.0117 9.8360 C 31.5274 9.8360 34.3633 12.9297 34.3633 17.0078 C 34.3633 21.1563 31.4805 24.4844 28.0117 24.4844 Z M 13.2930 49.7031 L 42.7305 49.7031 C 46.6211 49.7031 48.4726 48.5313 48.4726 45.9531 C 48.4726 39.8125 40.7383 30.9297 28.0117 30.9297 C 15.2852 30.9297 7.5274 39.8125 7.5274 45.9531 C 7.5274 48.5313 9.3789 49.7031 13.2930 49.7031 Z M 12.1679 46.1641 C 11.5586 46.1641 11.3008 46.0000 11.3008 45.5078 C 11.3008 41.6641 17.2539 34.4687 28.0117 34.4687 C 38.7695 34.4687 44.6992 41.6641 44.6992 45.5078 C 44.6992 46.0000 44.4648 46.1641 43.8555 46.1641 Z"
  }));
}

var _default = Person;
exports["default"] = _default;