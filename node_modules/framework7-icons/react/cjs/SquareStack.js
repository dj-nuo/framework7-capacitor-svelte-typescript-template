"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareStack(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.3750 3.6367 L 39.1094 3.6367 C 38.9688 1.6445 37.8437 .6133 35.6875 .6133 L 19.8203 .6133 C 17.6641 .6133 16.5156 1.6445 16.3750 3.6367 Z M 12.2266 10.1289 L 43.0937 10.1289 C 42.7422 7.9961 41.7344 6.8242 39.3906 6.8242 L 15.9297 6.8242 C 13.5859 6.8242 12.5781 7.9961 12.2266 10.1289 Z M 14.5937 55.3867 L 42.1094 55.3867 C 46.3281 55.3867 48.7656 52.9492 48.7656 48.1211 L 48.7656 21.1211 C 48.7656 16.2930 46.3047 13.8555 41.4063 13.8555 L 14.5937 13.8555 C 9.7188 13.8555 7.2344 16.2930 7.2344 21.1211 L 7.2344 48.1211 C 7.2344 52.9727 9.7188 55.3867 14.5937 55.3867 Z M 14.6641 51.6133 C 12.3203 51.6133 11.0078 50.3711 11.0078 47.9336 L 11.0078 21.3320 C 11.0078 18.8945 12.3203 17.6289 14.6641 17.6289 L 41.3594 17.6289 C 43.6797 17.6289 44.9922 18.8945 44.9922 21.3320 L 44.9922 47.9336 C 44.9922 50.3711 43.6797 51.6133 42.0625 51.6133 Z"
  }));
}

var _default = SquareStack;
exports["default"] = _default;