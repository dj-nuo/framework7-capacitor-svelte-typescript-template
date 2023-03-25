"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlayFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.0937 47.8398 C 14.0313 47.8398 14.8281 47.4648 15.7656 46.9258 L 43.0937 31.1289 C 45.0391 29.9805 45.7187 29.2305 45.7187 27.9883 C 45.7187 26.7461 45.0391 25.9961 43.0937 24.8711 L 15.7656 9.0508 C 14.8281 8.5118 14.0313 8.1602 13.0937 8.1602 C 11.3594 8.1602 10.2813 9.4727 10.2813 11.5118 L 10.2813 44.4649 C 10.2813 46.5039 11.3594 47.8398 13.0937 47.8398 Z"
  }));
}

var _default = PlayFill;
exports["default"] = _default;