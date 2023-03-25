"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpLeftCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 25.7968 37.7969 C 25.1640 37.7969 24.6718 37.5156 24.0858 36.9766 L 14.1249 27.6016 C 13.6562 27.1562 13.4921 26.6875 13.4921 26.2656 C 13.4921 25.8203 13.6327 25.3516 14.1249 24.9062 L 24.0858 15.6016 C 24.7421 14.9922 25.1405 14.7109 25.7733 14.7109 C 26.6405 14.7109 27.2499 15.4140 27.2499 16.2344 L 27.2499 21.0391 L 27.6249 21.0391 C 36.6718 21.0391 40.6327 26.7813 40.6327 36.1328 C 40.6327 37.2109 39.9999 37.7969 39.3436 37.7969 C 38.8046 37.7969 38.2187 37.6562 37.7968 36.8594 C 35.6171 32.7344 32.5234 31.5156 27.6249 31.5156 L 27.2499 31.5156 L 27.2499 36.3438 C 27.2499 37.1875 26.6405 37.7969 25.7968 37.7969 Z"
  }));
}

var _default = ArrowshapeTurnUpLeftCircleFill;
exports["default"] = _default;