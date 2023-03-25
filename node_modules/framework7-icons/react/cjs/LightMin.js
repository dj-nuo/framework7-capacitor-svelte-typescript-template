"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LightMin(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 20.0313 C 29.4999 20.0313 30.7421 18.7891 30.7421 17.2891 C 30.7421 15.7656 29.4999 14.5469 27.9999 14.5469 C 26.4765 14.5469 25.2577 15.7656 25.2577 17.2891 C 25.2577 18.7891 26.4765 20.0313 27.9999 20.0313 Z M 40.9843 26.0078 C 42.0390 27.0860 43.7733 27.0860 44.8514 26.0078 C 45.9296 24.9063 45.9296 23.1953 44.8514 22.1407 C 43.7499 21.0625 42.0624 21.0391 40.9843 22.1407 C 39.9062 23.1953 39.9062 24.9297 40.9843 26.0078 Z M 11.1249 26.0313 C 12.1796 27.1094 13.9140 27.1094 14.9921 26.0313 C 16.0936 24.9297 16.0936 23.2187 14.9921 22.1641 C 13.8905 21.0860 12.2030 21.0625 11.1249 22.1641 C 10.0468 23.2187 10.0233 24.9297 11.1249 26.0313 Z M 6.7655 41.2891 C 8.2655 41.2891 9.5077 40.0469 9.5077 38.5469 C 9.5077 37.0234 8.2655 35.8047 6.7655 35.8047 C 5.2421 35.8047 4.0233 37.0234 4.0233 38.5469 C 4.0233 40.0469 5.2421 41.2891 6.7655 41.2891 Z M 49.2344 41.4531 C 50.7344 41.4531 51.9767 40.2109 51.9767 38.7109 C 51.9767 37.1875 50.7344 35.9687 49.2344 35.9687 C 47.7109 35.9687 46.4921 37.1875 46.4921 38.7109 C 46.4921 40.2109 47.7109 41.4531 49.2344 41.4531 Z M 20.1014 36.7187 C 19.0233 36.7187 18.1093 37.6094 18.1093 38.6875 C 18.1093 39.7422 19.0233 40.6328 20.1014 40.6328 L 35.8280 40.6328 C 36.9062 40.6328 37.8202 39.7422 37.8202 38.6875 C 37.8202 37.6094 36.9062 36.7187 35.8280 36.7187 Z"
  }));
}

var _default = LightMin;
exports["default"] = _default;