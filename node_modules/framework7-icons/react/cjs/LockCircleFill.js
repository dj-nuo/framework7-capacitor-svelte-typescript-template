"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 19.4921 36.7187 L 19.4921 27.3438 C 19.4921 25.8203 20.0780 25.0469 21.3436 24.8594 L 21.3436 22.0234 C 21.3436 17.4531 24.1093 14.5000 27.9999 14.5000 C 31.8905 14.5000 34.6562 17.4531 34.6562 22.0234 L 34.6562 24.8360 C 35.8983 25.0234 36.4843 25.7969 36.4843 27.3438 L 36.4843 36.7187 C 36.4843 38.4766 35.7109 39.2734 34.0936 39.2734 L 21.9062 39.2734 C 20.2655 39.2734 19.4921 38.4766 19.4921 36.7187 Z M 23.7812 24.8125 L 32.2187 24.7891 L 32.2187 21.7656 C 32.2187 18.8125 30.5312 16.8672 27.9999 16.8672 C 25.4687 16.8672 23.7812 18.8125 23.7812 21.7656 Z"
  }));
}

var _default = LockCircleFill;
exports["default"] = _default;