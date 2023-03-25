"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0000 4.2578 C 21.4609 4.2578 15.4844 8.9219 15.4844 18.5078 L 15.4844 24.1328 C 12.9531 24.4375 11.7109 25.9610 11.7109 28.9610 L 11.7109 46.8438 C 11.7109 50.2188 13.2578 51.7422 16.375 51.7422 L 39.625 51.7422 C 42.7422 51.7422 44.2891 50.2188 44.2891 46.8438 L 44.2891 28.9375 C 44.2891 25.9375 43.0469 24.3437 40.5156 24.0625 L 40.5156 18.5078 C 40.5156 8.9219 34.5391 4.2578 28.0000 4.2578 Z M 19.2578 17.9922 C 19.2578 11.4532 23.1484 7.8672 28.0000 7.8672 C 32.8515 7.8672 36.7422 11.4532 36.7422 17.9922 L 36.7422 24.0391 L 19.2578 24.0625 Z"
  }));
}

var _default = LockFill;
exports["default"] = _default;