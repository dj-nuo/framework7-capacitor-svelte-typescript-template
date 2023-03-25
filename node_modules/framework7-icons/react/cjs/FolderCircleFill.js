"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FolderCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 14.8514 23.3594 L 14.8514 20.3125 C 14.8514 18.0625 15.9999 16.9140 17.9921 16.9140 L 21.4140 16.9140 C 22.5155 16.9140 23.0546 17.125 23.8514 17.7344 L 24.5780 18.2969 C 25.1405 18.7656 25.5624 18.9766 26.3593 18.9766 L 37.5390 18.9766 C 39.9062 18.9766 41.1249 20.1719 41.1249 22.4922 L 41.1249 23.3594 Z M 14.8514 35.0781 L 14.8514 25.2578 L 41.1249 25.2578 L 41.1249 35.0781 C 41.1249 37.3984 39.9296 38.5938 37.8905 38.5938 L 18.4374 38.5938 C 16.0936 38.5938 14.8514 37.3984 14.8514 35.0781 Z"
  }));
}

var _default = FolderCircleFill;
exports["default"] = _default;