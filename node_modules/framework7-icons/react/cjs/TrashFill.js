"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.6406 14.6641 L 13.1406 48.9062 C 13.2578 51.8359 15.0156 53.4297 17.8984 53.4297 L 38.125 53.4297 C 41.0078 53.4297 42.7656 51.8359 42.8828 48.9062 L 44.3828 14.6641 L 47.0781 14.6641 C 48.0391 14.6641 48.8125 13.8672 48.8125 12.9063 C 48.8125 11.9453 48.0391 11.1250 47.0781 11.1250 L 37.4453 11.1250 L 37.4453 7.7734 C 37.4453 4.5625 35.3125 2.5703 32.2891 2.5703 L 23.6640 2.5703 C 20.6406 2.5703 18.5313 4.5625 18.5313 7.7734 L 18.5313 11.1250 L 8.9453 11.1250 C 8.0078 11.1250 7.1875 11.9453 7.1875 12.9063 C 7.1875 13.8672 8.0078 14.6641 8.9453 14.6641 Z M 21.7187 7.7734 C 21.7187 6.4375 22.7031 5.5000 24.1094 5.5000 L 31.8672 5.5000 C 33.2969 5.5000 34.2813 6.4375 34.2813 7.7734 L 34.2813 11.1250 L 21.7187 11.1250 Z M 35.6172 48.6484 C 34.7031 48.6484 34.0703 47.8516 34.0938 46.8906 L 35.0547 19.7031 C 35.1016 18.7656 35.7813 17.9922 36.625 17.9922 C 37.4922 17.9922 38.1953 18.7422 38.1719 19.7031 L 37.1172 46.9141 C 37.0938 47.9219 36.4844 48.6484 35.6172 48.6484 Z M 20.4062 48.6484 C 19.5391 48.6484 18.9297 47.9219 18.9062 46.9141 L 17.8516 19.7031 C 17.8281 18.7187 18.5313 17.9922 19.3984 17.9922 C 20.2422 17.9922 20.9453 18.7656 20.9687 19.7031 L 21.9297 46.8906 C 21.9531 47.8516 21.3203 48.6484 20.4062 48.6484 Z M 29.6172 46.8906 C 29.6172 47.8516 28.8672 48.6484 28.0234 48.6484 C 27.1797 48.6484 26.4297 47.8516 26.4297 46.8906 L 26.4297 19.7031 C 26.4297 18.7656 27.1797 17.9922 28.0234 17.9922 C 28.8672 17.9922 29.6406 18.7656 29.6406 19.7031 Z"
  }));
}

var _default = TrashFill;
exports["default"] = _default;