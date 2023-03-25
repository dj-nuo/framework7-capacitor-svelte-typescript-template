"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnUpRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.2069 46.4453 C 9.4491 46.4453 10.3163 45.6016 10.3163 44.3594 C 10.3163 43.5391 10.246 42.7656 10.246 41.6641 C 10.246 32.9688 13.2694 29.4297 21.8710 29.4297 L 38.0428 29.4297 L 43.8085 29.0781 L 35.9101 36.2969 L 30.7069 41.5937 C 30.3319 41.9687 30.1210 42.5312 30.1210 43.0937 C 30.1210 44.2656 31.0350 45.1094 32.1835 45.1094 C 32.7225 45.1094 33.2382 44.8984 33.7069 44.4531 L 49.2695 28.9141 C 49.7615 28.4453 49.9962 27.9062 49.9962 27.3203 C 49.9962 26.7578 49.7615 26.1953 49.2695 25.7500 L 33.7538 10.2578 C 33.2382 9.7422 32.7225 9.5547 32.1835 9.5547 C 31.0350 9.5547 30.1210 10.3984 30.1210 11.5703 C 30.1210 12.1328 30.3319 12.6719 30.7069 13.0469 L 35.9101 18.3437 L 43.7850 25.5625 L 38.0428 25.2344 L 21.6601 25.2344 C 10.5507 25.2344 6.0038 30.1094 6.0038 41.4531 C 6.0038 42.8125 6.0507 43.9844 6.2147 44.6875 C 6.4022 45.6484 6.9882 46.4453 8.2069 46.4453 Z"
  }));
}

var _default = ArrowTurnUpRight;
exports["default"] = _default;