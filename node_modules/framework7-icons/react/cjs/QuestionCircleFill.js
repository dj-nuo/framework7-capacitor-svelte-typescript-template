"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.5546 33.0859 C 26.2655 33.0859 25.5858 32.4297 25.5858 31.1641 L 25.5858 30.8359 C 25.5858 28.4219 26.8749 27.1094 28.6562 25.8906 C 30.8358 24.4141 31.8436 23.5703 31.8436 21.8828 C 31.8436 20.0312 30.3905 18.7656 28.1405 18.7656 C 26.5234 18.7656 25.2812 19.5859 24.5312 20.9219 C 23.7343 21.8594 23.4999 22.5859 22.0936 22.5859 C 21.2968 22.5859 20.4062 22 20.4062 20.8984 C 20.4062 20.4766 20.4999 20.0781 20.6171 19.6797 C 21.2499 17.4063 24.0858 15.4375 28.3046 15.4375 C 32.4999 15.4375 36.1327 17.6172 36.1327 21.6953 C 36.1327 24.6484 34.4218 26.0547 32.0312 27.6719 C 30.3436 28.8203 29.4999 29.6641 29.4999 31.0469 L 29.4999 31.3516 C 29.4999 32.3125 28.7733 33.0859 27.5546 33.0859 Z M 27.6249 40.1406 C 26.2890 40.1406 24.9999 39.0625 24.9999 37.6094 C 24.9999 36.1563 26.2655 35.0781 27.6249 35.0781 C 29.0077 35.0781 30.2499 36.1328 30.2499 37.6094 C 30.2499 39.0859 28.9843 40.1406 27.6249 40.1406 Z"
  }));
}

var _default = QuestionCircleFill;
exports["default"] = _default;