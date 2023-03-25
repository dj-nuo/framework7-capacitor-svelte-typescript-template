"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FolderCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 14.8514 23.4063 L 41.1249 23.4063 L 41.1249 22.5390 C 41.1249 20.2188 39.9062 19.0234 37.5390 19.0234 L 26.3593 19.0234 C 25.5624 19.0234 25.1405 18.8125 24.5780 18.3437 L 23.8514 17.7812 C 23.0546 17.1719 22.5155 16.9609 21.4140 16.9609 L 17.9921 16.9609 C 15.9999 16.9609 14.8514 18.1094 14.8514 20.3594 Z M 14.8514 35.1250 C 14.8514 37.4453 16.0936 38.6406 18.4374 38.6406 L 37.8905 38.6406 C 39.9296 38.6406 41.1249 37.4453 41.1249 35.1250 L 41.1249 25.3047 L 14.8514 25.3047 Z"
  }));
}

var _default = FolderCircle;
exports["default"] = _default;