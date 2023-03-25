"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Ear(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10 42.3906 C 10 48.8594 14.0312 52.9844 20.3359 52.9844 C 25.0468 52.9844 28.5625 50.9219 30.7890 46.9375 L 32.8984 43.1641 C 37.8437 34.1172 46 32.9453 46 21.3203 C 46 10.3516 38.8984 3.0156 28.2578 3.0156 C 17.3594 3.0156 10 10.3984 10 21.4141 Z M 13.5390 42.1563 L 13.5390 21.4141 C 13.5390 12.4844 19.4219 6.5547 28.2578 6.5547 C 36.7890 6.5547 42.4609 12.4844 42.4609 21.3203 C 42.4609 31.0468 34.8437 32.7344 29.7344 41.5703 L 27.6953 45.0625 C 26.0312 47.9687 23.7109 49.3516 20.5 49.3516 C 16.1641 49.3516 13.5390 46.6328 13.5390 42.1563 Z M 18.5312 33.3437 C 19.4922 33.3437 20.3125 32.5234 20.3125 31.5625 L 20.3125 26.3828 L 26.2656 26.3828 C 27.8594 26.3828 28.8672 27.3437 28.8672 28.75 C 28.8672 29.4766 28.4922 30.4609 27.9297 31.1406 L 25.1172 34.6797 C 24.8125 35.0781 24.6484 35.5 24.6484 35.9453 C 24.6484 36.9063 25.4687 37.7031 26.4297 37.7031 C 26.9687 37.7031 27.4844 37.4219 27.8828 36.9297 L 30.9297 33.0625 C 31.8906 31.8437 32.5234 30.0625 32.5234 28.6094 C 32.5234 25.1641 30.0156 22.8437 26.2187 22.8437 L 20.3125 22.8437 L 20.3125 21.2734 C 20.3125 16.7734 23.4531 13.7969 28.2344 13.7969 C 32.7812 13.7969 35.7109 16.75 35.7109 21.2734 C 35.7109 22.2344 36.5078 23.0547 37.4687 23.0547 C 38.4297 23.0547 39.25 22.2344 39.25 21.2734 C 39.25 14.6875 34.8437 10.2578 28.2344 10.2578 C 21.3906 10.2578 16.7734 14.6875 16.7734 21.2734 L 16.7734 31.5625 C 16.7734 32.5234 17.5703 33.3437 18.5312 33.3437 Z"
  }));
}

var _default = Ear;
exports["default"] = _default;