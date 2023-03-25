"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SpeakerSlashFillRtl(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.7733 10.4102 L 42.7421 36.4024 C 44.6640 35.7929 45.7421 34.0586 45.7421 31.4102 L 45.7421 22.3164 C 45.7421 18.8008 43.9609 16.9961 40.6562 16.9961 L 33.6718 16.9961 C 33.4609 16.9961 33.2499 16.9258 33.0859 16.7851 L 22.7499 7.0117 C 21.5077 5.8398 20.7343 5.3242 19.5859 5.3242 C 17.9452 5.3242 16.7733 6.6367 16.7733 8.2070 Z M 46.7733 49.9727 C 47.4999 50.6758 48.6484 50.6758 49.3280 49.9727 C 50.0312 49.2461 50.0548 48.1211 49.3280 47.4180 L 9.2030 7.2929 C 8.4999 6.5898 7.3280 6.5898 6.6249 7.2929 C 5.9452 7.9727 5.9452 9.1680 6.6249 9.8476 Z M 31.1406 38.7929 L 16.7733 24.4492 L 16.7733 45.5898 C 16.7733 47.1602 17.9452 48.3320 19.5390 48.3320 C 20.6874 48.3320 21.6249 47.8633 22.7499 46.8086 Z"
  }));
}

var _default = SpeakerSlashFillRtl;
exports["default"] = _default;