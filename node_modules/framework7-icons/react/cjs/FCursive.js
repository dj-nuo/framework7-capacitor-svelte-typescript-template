"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FCursive(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 18.7305 48.2031 C 24.0508 48.2031 27.5664 45.1562 28.3867 39.0391 L 29.8867 28.2578 L 40.3633 28.2578 C 41.4648 28.2578 42.2851 27.4844 42.2851 26.4062 C 42.2851 25.3281 41.4414 24.5313 40.3164 24.5313 L 30.3789 24.5313 L 31.3398 17.6406 C 31.9258 13.3281 33.7539 11.5234 36.9883 11.5234 C 39.3320 11.5234 40.0586 11.8281 41.0195 11.8281 C 42.0273 11.8281 42.7539 11.1953 42.7539 10.0937 C 42.7539 8.2891 39.9883 7.7969 37.2695 7.7969 C 31.9492 7.7969 28.4336 10.8437 27.5898 16.9609 L 26.5586 24.5313 L 17.4883 24.5313 C 16.3867 24.5313 15.5664 25.3047 15.5664 26.4062 C 15.5664 27.4844 16.4102 28.2578 17.5351 28.2578 L 26.0429 28.2578 L 24.6602 38.3828 C 24.0742 42.6953 22.2461 44.4766 19.0117 44.4766 C 16.6680 44.4766 15.9883 44.1719 14.9805 44.1719 C 13.9726 44.1719 13.2461 44.8047 13.2461 45.9062 C 13.2461 47.7344 16.0117 48.2031 18.7305 48.2031 Z"
  }));
}

var _default = FCursive;
exports["default"] = _default;