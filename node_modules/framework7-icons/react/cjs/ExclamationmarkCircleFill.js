"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ExclamationmarkCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9765 31.5156 C 26.7343 31.5156 26.0546 30.7890 26.0077 29.5469 L 25.6796 17.9688 C 25.6327 16.6797 26.6171 15.7656 27.9530 15.7656 C 29.2655 15.7656 30.2733 16.7031 30.2265 17.9922 L 29.8983 29.5469 C 29.8514 30.8125 29.1483 31.5156 27.9765 31.5156 Z M 27.9765 40.1406 C 26.6171 40.1406 25.3514 39.0625 25.3514 37.6094 C 25.3514 36.1563 26.5936 35.0781 27.9765 35.0781 C 29.3358 35.0781 30.6014 36.1328 30.6014 37.6094 C 30.6014 39.0859 29.3124 40.1406 27.9765 40.1406 Z"
  }));
}

var _default = ExclamationmarkCircleFill;
exports["default"] = _default;