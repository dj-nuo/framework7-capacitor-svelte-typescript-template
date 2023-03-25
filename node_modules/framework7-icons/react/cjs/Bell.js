"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bell(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.4257 43.7500 L 33.0273 43.7500 C 32.8632 46.9141 30.8242 48.9297 28.0117 48.9297 C 25.1757 48.9297 23.1601 46.9141 22.9726 43.7500 L 19.3164 43.7500 C 19.5039 48.2500 23.0429 52.2109 28.0117 52.2109 C 32.9570 52.2109 36.4960 48.2500 36.6835 43.7500 L 46.5742 43.7500 C 48.8005 43.7500 50.1133 42.6016 50.1133 40.9141 C 50.1133 38.5703 47.7460 36.4609 45.7070 34.375 C 44.1601 32.7578 43.7382 29.4297 43.5742 26.7344 C 43.3867 17.5000 41.0195 11.5234 34.7617 9.2734 C 33.9882 6.2266 31.4570 3.7891 28.0117 3.7891 C 24.5429 3.7891 22.0351 6.2266 21.2382 9.2734 C 15.0039 11.5234 12.6132 17.5000 12.4492 26.7344 C 12.2617 29.4297 11.8632 32.7578 10.2929 34.375 C 8.2773 36.4609 5.8867 38.5703 5.8867 40.9141 C 5.8867 42.6016 7.2226 43.7500 9.4257 43.7500 Z M 10.4570 40.2109 L 10.4570 39.9297 C 10.8789 39.2266 12.2617 37.8672 13.5039 36.4844 C 15.1679 34.6094 15.9648 31.6094 16.1757 27.0156 C 16.3632 16.7969 19.4101 13.5156 23.4413 12.4375 C 24.0273 12.2969 24.3320 11.9922 24.3554 11.4062 C 24.4492 8.9453 25.8320 7.2344 28.0117 7.2344 C 30.1679 7.2344 31.5742 8.9453 31.6445 11.4062 C 31.6679 11.9922 31.9960 12.2969 32.5820 12.4375 C 36.5898 13.5156 39.6367 16.7969 39.8476 27.0156 C 40.0351 31.6094 40.8320 34.6094 42.5195 36.4844 C 43.7382 37.8672 45.1445 39.2266 45.5664 39.9297 L 45.5664 40.2109 Z"
  }));
}

var _default = Bell;
exports["default"] = _default;