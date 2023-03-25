"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Percent(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 14.1484 50.3945 C 14.9453 50.3945 15.4375 50.0430 16.0468 49.1523 L 29.8984 28.6914 L 43.4219 8.7461 C 43.7266 8.3476 43.8672 7.9258 43.8672 7.3867 C 43.8672 6.4258 43 5.6055 41.9453 5.6055 C 41.1016 5.6055 40.6094 5.9336 39.9531 6.8711 L 26.4297 26.8633 L 12.6016 47.1602 C 12.2968 47.6055 12.1328 48.0742 12.1328 48.5898 C 12.1328 49.6211 12.9765 50.3945 14.1484 50.3945 Z M 14.6875 27.4492 C 19.75 27.4492 22.7968 23.3008 22.7968 16.6914 C 22.7968 10.0820 19.7266 6.0039 14.6875 6.0039 C 9.6719 6.0039 6.5781 10.1055 6.5781 16.6914 C 6.5781 23.3242 9.6484 27.4492 14.6875 27.4492 Z M 14.6875 24.1680 C 11.9687 24.1680 10.3750 21.4258 10.3750 16.6914 C 10.3750 12.0273 11.9922 9.2617 14.6875 9.2617 C 17.3828 9.2617 19 12.0039 19 16.6914 C 19 21.4258 17.4063 24.1680 14.6875 24.1680 Z M 41.3125 49.9961 C 46.3750 49.9961 49.4219 45.8477 49.4219 39.2617 C 49.4219 32.6289 46.3516 28.5508 41.3125 28.5508 C 36.2968 28.5508 33.2031 32.6524 33.2031 39.2617 C 33.2031 45.8711 36.2734 49.9961 41.3125 49.9961 Z M 41.3125 46.7383 C 38.5937 46.7383 37 43.9727 37 39.2617 C 37 34.5742 38.6172 31.8320 41.3125 31.8320 C 44.0078 31.8320 45.6250 34.5508 45.6250 39.2617 C 45.6250 43.9727 44.0312 46.7383 41.3125 46.7383 Z"
  }));
}

var _default = Percent;
exports["default"] = _default;