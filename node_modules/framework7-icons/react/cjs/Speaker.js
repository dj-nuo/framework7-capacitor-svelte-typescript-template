"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Speaker(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 40 49.5039 C 41.5937 49.5039 42.7422 48.3320 42.7422 46.7617 L 42.7422 9.3789 C 42.7422 7.8086 41.5937 6.4961 39.9531 6.4961 C 38.8047 6.4961 38.0547 7.0586 36.7890 8.1836 L 25.7734 17.9570 C 25.6328 18.0977 25.4219 18.1680 25.1875 18.1680 L 18.2265 18.1680 C 14.8984 18.1680 13.2578 19.8320 13.2578 23.3711 L 13.2578 32.6992 C 13.2578 36.2383 14.8984 37.9024 18.2265 37.9024 L 25.1875 37.9024 C 25.4219 37.9024 25.6328 37.9726 25.7734 38.1133 L 36.7890 47.9805 C 37.9375 49.0117 38.8516 49.5039 40 49.5039 Z M 38.6406 44.5586 C 38.5234 44.5586 38.3828 44.4883 38.2422 44.3477 L 27.8594 34.9961 C 27.2968 34.4805 26.8281 34.3633 26.1953 34.3633 L 18.3906 34.3633 C 17.4765 34.3633 17.0312 33.9414 17.0312 33.0039 L 17.0312 23.0664 C 17.0312 22.1524 17.4765 21.7070 18.3906 21.7070 L 26.1953 21.7070 C 26.8281 21.7070 27.2734 21.6133 27.8594 21.0742 L 38.2422 11.6524 C 38.3594 11.5586 38.5 11.4648 38.6406 11.4648 C 38.8516 11.4648 38.9687 11.6055 38.9687 11.7929 L 38.9687 44.2070 C 38.9687 44.4180 38.8516 44.5586 38.6406 44.5586 Z"
  }));
}

var _default = Speaker;
exports["default"] = _default;